import { Link, useParams } from 'react-router-dom'

import { CardsTable } from '@/components/cards/cards-table/cards-table'
import { useDeleteDeck } from '@/components/cards/hooks/useDeleteDeck'
import { useEditDeck } from '@/components/cards/hooks/useEditDeck'
import { usePaginationCards } from '@/components/cards/hooks/usePaginationCards'
import { useSearchByQuestion } from '@/components/cards/hooks/useSearchByQuestion'
import { useTableCardsInfo } from '@/components/cards/hooks/useTableCardsInfo'
import { CreateAndModifyDeckForm } from '@/components/forms/create-and-modify-deck-form'
import { BackButton } from '@/components/ui/back-button'
import { Button } from '@/components/ui/button'
import { Dropdown } from '@/components/ui/dropdown'
import { InitialLoader, PreLoader } from '@/components/ui/loader'
import { Modal } from '@/components/ui/modal'
import { Pagination } from '@/components/ui/pagination/Pagination'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import { AddNewCard } from '@/features/add-new-card/add-new-card'
import { ButtonFooter } from '@/features/button-footer'
import { DropdownCard } from '@/features/dropdown-card/dropdown-card'
import { useGetCardsInDeckQuery } from '@/services/cards-api/cards-api'
import { useGetDeckInfoQuery } from '@/services/decks-api/decks-api'

import s from './cards.module.scss'

import defaultMask from '../../assets/images/not-img.jpg'

export const Cards = () => {
  const { id } = useParams()
  const packId = id ?? ('' as string)

  const {
    name,
    orderBy,
    searchName,
    searchParams,
    setNameQuestion,
    setSearchParams,
    setSort,
    sort,
  } = useSearchByQuestion()

  const { deleteDeckHandler, deleteDeckModal, setDeleteDeckModal } = useDeleteDeck(packId)
  const { editDeckHandler, editDeckModal, setEditDeckModal } = useEditDeck(packId)
  const { data: deckData } = useGetDeckInfoQuery({ id: packId })
  const { cardsColumns, defaultValue, isMyPack } = useTableCardsInfo(deckData)
  const { changeItemPerPage, changePage, currentPage, itemsPerPage } = usePaginationCards(
    searchParams,
    setSearchParams
  )

  const {
    data: cardsData,
    isFetching,
    isLoading,
  } = useGetCardsInDeckQuery({
    packId,
    params: {
      currentPage,
      itemsPerPage,
      orderBy,
      question: name,
    },
  })

  const showLearnCard = !!cardsData?.items.length
  const showSearch = cardsData?.pagination.totalItems || name.length || false
  const deckName = deckData?.name

  if (isLoading) {
    return <PreLoader />
  }

  return (
    <section className={s.cardsPage}>
      <BackButton text={'Return to deck page'} />
      {isFetching && <InitialLoader />}

      <div className={s.section}>
        <div className={s.sectionHeader}>
          <Typography variant={'large'}>{deckData?.name}</Typography>

          {isMyPack && (
            <Dropdown align={'center'} className={s.dropDown} sideOffset={-10}>
              <DropdownCard
                setDeleteDeckModal={setDeleteDeckModal}
                setEditDeckModal={setEditDeckModal}
              />
            </Dropdown>
          )}

          {editDeckModal && (
            <Modal open setOpen={() => setEditDeckModal(false)} title={'Editing a Deck'}>
              <CreateAndModifyDeckForm
                defaultValue={defaultValue}
                onCancel={() => setEditDeckModal(false)}
                onSubmit={editDeckHandler}
              />
            </Modal>
          )}

          {deleteDeckModal && (
            <Modal open setOpen={() => setDeleteDeckModal(false)} title={'Removing a deck'}>
              <Typography variant={'body1'}>
                Are you sure you want to delete the {deckData?.name} deck?
              </Typography>
              <ButtonFooter
                onClickCancel={() => setDeleteDeckModal(false)}
                onClickConfirm={deleteDeckHandler}
                option={2}
                titleConfirm={'Delete'}
              />
            </Modal>
          )}

          {isMyPack ? (
            <AddNewCard deckId={id} />
          ) : (
            showLearnCard && (
              <Button as={Link} to={`learn`}>
                <Typography variant={'subtitle2'}>Learn cards</Typography>
              </Button>
            )
          )}
        </div>
        {deckData?.cover && (
          <img
            alt={'Cover'}
            className={s.packsImg}
            src={deckData.cover ? deckData.cover : defaultMask}
          />
        )}
      </div>

      {showSearch && (
        <TextField
          clearField={() => setNameQuestion('')}
          onChange={e => setNameQuestion(e.currentTarget.value)}
          placeholder={'Search by question'}
          type={'search'}
          value={searchName}
        />
      )}

      {cardsData?.items && (
        <CardsTable
          cardsColumns={cardsColumns}
          cardsData={cardsData}
          deckName={deckName}
          isMyPack={isMyPack}
          setSort={setSort}
          sort={sort}
        />
      )}

      {cardsData && cardsData?.pagination.totalItems > 5 && (
        <Pagination
          className={s.pagination}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          onChangeItemsPerPage={changeItemPerPage}
          onChangePage={changePage}
          totalPages={cardsData?.pagination.totalPages}
        />
      )}
    </section>
  )
}
