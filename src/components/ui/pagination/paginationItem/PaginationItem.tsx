import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

import s from '@/components/ui/pagination/pagination.module.scss'

export type PaginationItem = {
  onClick: (page: number) => void
  page: number
  selected: boolean
  type: 'end-ellipsis' | 'first' | 'last' | 'next' | 'page' | 'previous' | 'start-ellipsis'
}
export const PaginationItem = ({ onClick, page, selected }: PaginationItem) => {
  const onClickButtonPage = () => {
    console.log(selected)
    onClick(page)
  }

  return (
    <Button className={s.button} onClick={onClickButtonPage}>
      <Typography variant={'body2'}>{page}</Typography>
    </Button>
  );
};