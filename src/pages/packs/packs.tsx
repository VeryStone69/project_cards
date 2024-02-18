import { useDebounce } from '@/app/hooks'
import { packsColumns } from '@/common/consts/packs-columns'
import { InitialLoader, PreLoader } from '@/components/ui/loader'
import { Pagination } from '@/components/ui/pagination/Pagination'
import { Table } from '@/components/ui/table'
import { TableHeader } from '@/components/ui/table-header'
import { Typography } from '@/components/ui/typography'
import { AddNewDeck } from '@/features/add-new-deck'
import { FilterControl } from '@/features/filter-control'
import { useFilterSetting } from '@/pages/packs/hooks/useFilterSetting'
import { usePaginationDecks } from '@/pages/packs/hooks/usePaginationDecks'
import { useMeQuery } from '@/services/auth-api/auth'
import { useGetDecksQuery } from '@/services/decks-api/decks-api'
import { TableContentDeck } from '@/widgets/table-content-deck'

import s from './packs.module.scss'

export const Packs = () => {
  const { changeItemPerPage, changePage, currentPage, itemsPerPage } = usePaginationDecks()

  const { data: me } = useMeQuery()
  const currentUserId = me?.id || ''

  const {
    clearFilter,
    getMyCard,
    orderBy,
    searchName,
    setName,
    setSlider,
    setSort,
    sliderValueMax,
    sliderValueMin,
    sort,
    tabValue,
  } = useFilterSetting(currentUserId)

  const minCardsCount = useDebounce(sliderValueMin)
  const maxCardsCount = useDebounce(sliderValueMax)

  const name = useDebounce(searchName)
  const authorId = tabValue === 'my' ? currentUserId : undefined
  const {
    data: decks,
    isFetching,
    isLoading,
  } = useGetDecksQuery({
    authorId,
    currentPage,
    itemsPerPage,
    maxCardsCount,
    minCardsCount,
    name,
    orderBy,
  })

  if (isLoading) {
    return <PreLoader />
  }

  return (
    <div className={s.packsPage}>
      {isFetching && <InitialLoader />}
      <div className={s.setting}>
        <div className={s.addCard}>
          <Typography as={'h1'} variant={'large'}>
            Packs list
          </Typography>
          <AddNewDeck />
        </div>
        <FilterControl
          clearFilter={clearFilter}
          searchName={searchName}
          setSearchName={setName}
          setSliderValue={setSlider}
          setTabValue={getMyCard}
          sliderMaxValue={decks?.maxCardsCount}
          sliderValue={[sliderValueMin, sliderValueMax ?? (decks?.maxCardsCount || 0)]}
          tabValue={tabValue}
        />
      </div>
      <Table.Root className={s.table}>
        <TableHeader columns={packsColumns} onSort={setSort} sort={sort} />
        <Table.Body>
          {decks?.items.map(decks => (
            <TableContentDeck currentUserId={currentUserId} deck={decks} key={decks.id} />
          ))}
        </Table.Body>
      </Table.Root>
      <Pagination
        className={s.pagination}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onChangeItemsPerPage={changeItemPerPage}
        onChangePage={changePage}
        totalPages={decks?.pagination.totalPages}
      />
    </div>
  )
}
