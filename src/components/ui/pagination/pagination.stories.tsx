import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Pagination } from '@/components/ui/pagination/Pagination'

const meta = {
  argTypes: {},
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/ui/Pagination',
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const PaginationControlled: Story = {
  args: {
    currentPage: 1,
    itemsPerPage: 5,
    onChangeItemsPerPage: () => {},
    onChangePage: () => {},
    totalPages: 100,
  },
  render: () => {
    const [page, setPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(5)

    return (
      <>
        <Pagination
          currentPage={page}
          itemsPerPage={itemsPerPage}
          onChangeItemsPerPage={setItemsPerPage}
          onChangePage={setPage}
          totalPages={100}
        />
        <div style={{ marginTop: '24px' }}>
          <p>Current page: {page}</p>
          <p>Page size: {itemsPerPage}</p>
        </div>
      </>
    )
  },
}
