import { useState } from 'react'

import { useDebounce } from '@/app/hooks'
import { InitialLoader, PreLoader } from '@/components/ui/loader'
import { Pagination } from '@/components/ui/pagination/Pagination'
import { Typography } from '@/components/ui/typography'
import { AddNewDeck } from '@/features/add-new-deck'
import { FilterControl } from '@/features/filter-control'
import { useFilterSetting } from '@/pages/packs/hooks/useFilterSetting'
import { usePaginationDecks } from '@/pages/packs/hooks/usePaginationDecks'
import { PacksTable } from '@/pages/packs/packs-table/packs-table'
import { useMeQuery } from '@/services/auth-api/auth'
import { useGetDecksQuery } from '@/services/decks-api/decks-api'
import { TableContentDeckMobile } from '@/widgets/table-content-deck-mobile/table-content-deck-mobile'

import s from './packs.module.scss'

export const Packs = () => {
  const { data: me } = useMeQuery()
  const currentUserId = me?.id || ''

  const {
    clearFilter,
    getMyCard,
    orderBy,
    searchName,
    searchParams,
    setName,
    setSearchParams,
    setSlider,
    setSort,
    sliderValueMax,
    sliderValueMin,
    sort,
    tabValue,
  } = useFilterSetting(currentUserId)
  const { changeItemPerPage, changePage, currentPage, itemsPerPage } = usePaginationDecks(
    searchParams,
    setSearchParams
  )
  const minCardsCount = useDebounce(sliderValueMin)
  const maxCardsCount = useDebounce(sliderValueMax)

  const name = useDebounce(searchName)
  const authorId = tabValue === 'my' ? currentUserId : undefined
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768)
  }

  window.addEventListener('resize', handleResize)
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
          <Typography as={'h1'} className={s.title} variant={'large'}>
            List of decks
          </Typography>
          <AddNewDeck />
        </div>
        <FilterControl
          clearFilter={clearFilter}
          disabled={isFetching}
          searchName={searchName}
          setSearchName={setName}
          setSliderValue={setSlider}
          setTabValue={getMyCard}
          sliderMaxValue={decks?.maxCardsCount}
          sliderValue={[sliderValueMin, sliderValueMax ?? (decks?.maxCardsCount || 0)]}
          tabValue={tabValue}
        />
      </div>
      {decks?.items && isMobile && (
        <TableContentDeckMobile currentUserId={currentUserId} items={decks?.items} />
      )}
      {decks?.items && !isMobile && (
        <PacksTable
          currentUserId={currentUserId}
          items={decks?.items}
          setSort={setSort}
          sort={sort}
        />
      )}

      {decks && decks?.pagination.totalItems > 5 && (
        <Pagination
          className={s.pagination}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          onChangeItemsPerPage={changeItemPerPage}
          onChangePage={changePage}
          totalPages={decks?.pagination.totalPages}
        />
      )}
    </div>
  )
}
