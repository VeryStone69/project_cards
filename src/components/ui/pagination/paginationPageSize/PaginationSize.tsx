import { Option, Select } from '@/components/ui/select'
import { Typography } from '@/components/ui/typography'

import s from '@/components/ui/pagination/pagination.module.scss'

type PaginationSizeProps = {
  itemsPerPage: number
  onChangeItemsPerPage: (page: number) => void
  pageSizeSelect: Option[]
}
export const PaginationSize = ({
  itemsPerPage,
  onChangeItemsPerPage,
  pageSizeSelect,
}: PaginationSizeProps) => {
  const onValueChange = (page: string) => {
    onChangeItemsPerPage(+page)
  }

  return (
    <>
      <Typography className={s.typographyShow} variant={'body2'}>
        Показать
      </Typography>
      <div className={s.selectStyle}>
        <Select
          onValueChange={onValueChange}
          options={pageSizeSelect}
          placeholder={`${itemsPerPage}`}
          sizeSelect={'small'}
          value={`${itemsPerPage}`}
        />
      </div>
      <Typography className={s.typographyPage} variant={'body2'}>
        на странице
      </Typography>
    </>
  )
}
