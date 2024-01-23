import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Table } from '@/components/ui/table'
import { Sort, TableHeader } from '@/components/ui/table-header/tableHeader'

const meta = {
  component: Table.Root,
  tags: ['autodocs'],
  title: 'Components/ui/Table Header',
} satisfies Meta<typeof Table.Root>

export default meta
type Story = StoryObj<typeof meta>

const data = [
  {
    cardsCount: 10,
    createdBy: 'John Doe',
    title: 'Project A',
    updated: '2023-07-07',
  },
  {
    cardsCount: 5,
    createdBy: 'Jane Smith',
    title: 'Project B',
    updated: '2023-07-06',
  },
  {
    cardsCount: 8,
    createdBy: 'Alice Johnson',
    title: 'Project C',
    updated: '2023-07-05',
  },
  {
    cardsCount: 3,
    createdBy: 'Bob Anderson',
    title: 'Project D',
    updated: '2023-07-07',
  },
  {
    cardsCount: 12,
    createdBy: 'Emma Davis',
    title: 'Project E',
    updated: '2023-07-04',
  },
]
const columns = [
  {
    key: 'name',
    sortable: true,
    title: 'Name',
  },
  {
    key: 'cardsCount',
    sortable: true,
    title: 'Cards',
  },
  {
    key: 'updated',
    sortable: true,
    title: 'Last Updated',
  },
  {
    key: 'createdBy',
    sortable: true,
    title: 'Created By',
  },
]

export const TableHead: Story = {
  render: () => {
    const [sort, setSort] = useState<Sort>(null)

    return (
      <Table.Root>
        <TableHeader columns={columns} onSort={setSort} sort={sort} />
        <Table.Body>
          {data.map(item => (
            <Table.Row key={item.title}>
              <Table.Cell>{item.title}</Table.Cell>
              <Table.Cell>{item.cardsCount}</Table.Cell>
              <Table.Cell>{item.updated}</Table.Cell>
              <Table.Cell>{item.createdBy}</Table.Cell>
              <Table.Cell>icon</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    )
  },
}
