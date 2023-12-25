import { Option, Select } from '@/components/ui/select'
import { Typography } from '@/components/ui/typography'

import s from '@/components/ui/pagination/pagination.module.scss'

type PaginationSizeProps = {
  currentItems: string
  onChangePageSize: (page: string) => void
  pageSizeSelect: Option[]
}
export const PaginationSize = ({
  currentItems,
  onChangePageSize,
  pageSizeSelect,
}: PaginationSizeProps) => {
  const onValueChange = (page: string) => {
    onChangePageSize(page)
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
          placeholder={'test'}
          sizeSelect={'small'}
          value={currentItems}
        />
      </div>
      <Typography className={s.typographyPage} variant={'body2'}>
        на странице
      </Typography>
    </>
  )
}
