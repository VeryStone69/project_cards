import { ComponentPropsWithoutRef } from 'react'
import { useTranslation } from 'react-i18next'

import { Icon } from '@/components/icon/Icon'

import s from './tableHeader.module.scss'

import { Table } from '../table'

export type Column = {
  key: string
  sortable?: boolean
  title: string
}
export type Sort = {
  direction: 'asc' | 'desc'
  key: string
} | null
export type TableHeaderProps = Omit<
  ComponentPropsWithoutRef<'thead'> & {
    columns: Column[]
    onSort?: (sort: Sort) => void
    sort?: Sort
  },
  'children'
>

export const TableHeader = ({ columns, onSort, sort, ...props }: TableHeaderProps) => {
  const handleSort = (key: string, sortable?: boolean) => () => {
    if (!onSort || !sortable) {
      return
    }

    if (sort?.key !== key) {
      return onSort({ direction: 'asc', key })
    }

    if (sort.direction === 'desc') {
      return onSort(null)
    }

    return onSort({
      direction: sort?.direction === 'asc' ? 'desc' : 'asc',
      key,
    })
  }
  const { t } = useTranslation()

  return (
    <Table.Head {...props}>
      <Table.Row className={s.row}>
        {columns.map(({ key, sortable, title }, index) => {
          const sortCondition = sort && sort.key === key
          const classesIcon = s.icon + ' ' + (sort?.direction === 'desc' && s.iconDown)

          return (
            <Table.HeadCell className={s.ceil} key={title} onClick={handleSort(key, sortable)}>
              {index === columns.length - 1 ? title : t(`columns.${key}`)}
              {sortCondition && <Icon className={classesIcon} name={'arrowDown'} />}
            </Table.HeadCell>
          )
        })}
      </Table.Row>
    </Table.Head>
  )
}
