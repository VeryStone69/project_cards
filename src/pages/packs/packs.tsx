import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Layout } from '@/components/layout'
import { Button } from '@/components/ui/button'
import { Pagination } from '@/components/ui/pagination/Pagination'
import { Table } from '@/components/ui/table'
import { TableHeader } from '@/components/ui/table-header'
import { Typography } from '@/components/ui/typography'
import { FilterControl } from '@/features/filter-control'
import { useGetDecksQuery } from '@/services/decksAPI/decks-api'

import defaultMask from '../../assets/images/Mask.jpg'

export const Packs = () => {
  const [currentPageDecks, setCurrentPage] = useState(1)
  const [itemPerPage, setItemPerPage] = useState(5)
  const decks = useGetDecksQuery({ currentPage: currentPageDecks, itemsPerPage: itemPerPage })

  const changePage = (page: number) => {
    setCurrentPage(page)
  }
  const changeItemPerPage = (item: number) => {
    setItemPerPage(item)
  }
  const packsColumns = [
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
      key: 'created',
      sortable: true,
      title: 'Created By',
    },
    {
      key: 'controls',
      sortable: true,
      title: '',
    },
  ]

  return (
    <Layout>
      <div style={{ marginTop: '100px' }}>
        <div style={{ marginBottom: '30px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography as={'h1'} variant={'large'}>
              Packs list
            </Typography>
            <Button>Add new Pack</Button>
          </div>
          <FilterControl
            searchName={''}
            setSearchName={() => {}}
            setSliderValue={() => {}}
            setTabValue={() => {}}
            sliderMaxValue={decks?.data?.maxCardsCount}
            sliderValue={[1]}
            tabValue={'1'}
          />
        </div>
        <Table.Root style={{ marginBottom: '24px' }}>
          <TableHeader columns={packsColumns} />
          <Table.Body>
            {decks.data?.items.map(decks => {
              return (
                <Table.Row key={decks.id}>
                  <Table.Cell align={'left'}>
                    <Button as={Link} to={decks.id} variant={'link'}>
                      <img
                        alt={'Pack cover'}
                        src={decks.cover ?? defaultMask}
                        style={{ height: '48px', width: '110px' }}
                      />
                      <Typography as={'h3'} variant={'body2'}>
                        {decks.name}
                      </Typography>
                    </Button>
                  </Table.Cell>
                  <Table.Cell>{decks.cardsCount}</Table.Cell>
                  <Table.Cell>{new Date(decks.updated).toLocaleDateString()}</Table.Cell>
                  <Table.Cell>{decks.author.name}</Table.Cell>
                </Table.Row>
              )
            })}
          </Table.Body>
        </Table.Root>
        <Pagination
          currentPage={currentPageDecks}
          itemsPerPage={itemPerPage}
          onChangeItemsPerPage={changeItemPerPage}
          onChangePage={changePage}
          totalPages={decks.data?.pagination.totalPages}
        />
      </div>
    </Layout>
  )
}
