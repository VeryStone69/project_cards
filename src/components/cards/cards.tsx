import { useState } from 'react'
import { useTranslation } from 'react-i18next'
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
import { TableContentCardsMobile } from '@/widgets/table-content-cards-modile'

import s from './cards.module.scss'

import defaultMask from '../../assets/images/not-img.jpg'

export const Cards = () => {
  const { id } = useParams()
  const packId = id as string

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
  const { t } = useTranslation()
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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768)
  }

  window.addEventListener('resize', handleResize)
  const showLearnCard = !!cardsData?.items.length
  const showSearch = cardsData?.pagination.totalItems || name.length || false
  const deckName = deckData?.name

  if (isLoading) {
    return <PreLoader />
  }

  return (
    <section className={s.cardsPage}>
      <BackButton text={t('cards.back')} />
      {isFetching && <InitialLoader />}

      <div className={s.section}>
        <div className={s.sectionHeader}>
          <Typography variant={'large'}>{deckData?.name}</Typography>

          {isMyPack && (
            <Dropdown align={'center'} className={s.dropDown} sideOffset={-6}>
              <DropdownCard
                setDeleteDeckModal={setDeleteDeckModal}
                setEditDeckModal={setEditDeckModal}
              />
            </Dropdown>
          )}

          {editDeckModal && (
            <Modal open setOpen={() => setEditDeckModal(false)} title={t('editDeckModal.title')}>
              <CreateAndModifyDeckForm
                defaultValue={defaultValue}
                onCancel={() => setEditDeckModal(false)}
                onSubmit={editDeckHandler}
              />
            </Modal>
          )}

          {deleteDeckModal && (
            <Modal
              open
              setOpen={() => setDeleteDeckModal(false)}
              title={t('deleteDeckModal.title')}
            >
              <Typography variant={'body1'}>
                {t('deleteDeckModal.description', { name: deckData?.name })}
              </Typography>
              <ButtonFooter
                onClickCancel={() => setDeleteDeckModal(false)}
                onClickConfirm={deleteDeckHandler}
                option={2}
                titleCancel={t('deleteCardModal.cancel')}
                titleConfirm={t('deleteCardModal.remove')}
              />
            </Modal>
          )}

          {isMyPack && <AddNewCard deckId={id} />}
          {!isMyPack && showLearnCard && (
            <Button as={Link} to={`learn`}>
              <Typography variant={'subtitle2'}>{t('cards.learn.title')}</Typography>
            </Button>
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
          placeholder={t('cards.search.placeholder')}
          type={'search'}
          value={searchName}
        />
      )}

      {cardsData?.items && !isMobile && (
        <CardsTable
          cardsColumns={cardsColumns}
          cardsData={cardsData}
          deckName={deckName}
          isMyPack={isMyPack}
          setSort={setSort}
          sort={sort}
        />
      )}
      {cardsData?.items && isMobile && (
        <TableContentCardsMobile cardsData={cardsData} isMyPack={isMyPack} />
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
