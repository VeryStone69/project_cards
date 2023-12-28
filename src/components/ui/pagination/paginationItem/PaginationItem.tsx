import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

import s from '@/components/ui/pagination/pagination.module.scss'

export type PaginationItemProps = {
  currentPage: number
  onClickChangePage: (page: number) => void
  page: number
  pagesTotal: number
  type: 'first' | 'last' | 'page'
}
export const PaginationItem = ({ currentPage, onClickChangePage, page }: PaginationItemProps) => {
  const select = page === currentPage ? s.buttonSelect : s.button
  const onClickButtonPage = () => {
    onClickChangePage(page)
  }

  return (
    <>
      <Button className={select} onClick={onClickButtonPage}>
        <Typography variant={'body2'}>{page}</Typography>
      </Button>
    </>
  )
}
