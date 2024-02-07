import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { BackButton } from '@/components/ui/back-button'
import { Button } from '@/components/ui/button'
import { Dropdown } from '@/components/ui/dropdown'
import { Pagination } from '@/components/ui/pagination/Pagination'
import { Rating } from '@/components/ui/rating'
import { Table } from '@/components/ui/table'
import { TableHeader } from '@/components/ui/table-header'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import { DeleteCardButton } from '@/features/delete-card-button/delete-card-button'
import { DropdownCard } from '@/features/dropdown-card/dropdown-card'
import { useGetCardsInDeckQuery } from '@/services/cards-api/cards-api'
import { useGetDeckInfoQuery } from '@/services/decks-api/decks-api'

import s from './cards.module.scss'

import defaultMask from '../../assets/images/Mask.jpg'

export const Cards = () => {
  const { id } = useParams()
  const [itemPerPage, setItemPerPage] = useState(5)
  const [currentPageDecks, setCurrentPage] = useState(1)
  const packId = id ?? ('' as string)
  const isMyPack = 'authUserId === pack.author.id' || true

  const cards = useGetCardsInDeckQuery({
    packId,
    params: { currentPage: currentPageDecks, itemsPerPage: itemPerPage },
  })
  const pack = useGetDeckInfoQuery({ id: packId })
  const cardsColumns = [
    {
      key: 'name',
      sortable: true,
      title: 'Question',
    },
    {
      key: 'answer',
      sortable: true,
      title: 'Answer',
    },
    {
      key: 'updated',
      sortable: true,
      title: 'Last Updated',
    },
    {
      key: 'grade',
      sortable: true,
      title: 'Grade',
    },
  ]

  return (
    <section style={{ marginTop: '100px' }}>
      <BackButton />
      <div style={{ marginTop: '34px' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Typography as={'h1'} variant={'h1'}>
            {pack.data?.name}
          </Typography>
          <Dropdown align={'center'} className={s.dropDown} sideOffset={-10}>
            <DropdownCard />
          </Dropdown>
          <Button as={Link} to={`learn`}>
            Learn Card
          </Button>
        </div>
        {pack.data?.cover && (
          <img
            alt={'Cover'}
            src={pack.data.cover}
            style={{
              height: '6rem',
              marginBottom: '24px',
              marginTop: '15px',
              width: '10rem',
            }}
          />
        )}

        <TextField
          clearField={() => {}}
          onChange={() => {}}
          placeholder={'Search by question'}
          type={'search'}
          value={''}
        />
      </div>
      <Table.Root style={{ marginBottom: '24px', marginTop: '24px' }}>
        <TableHeader columns={cardsColumns} />
        <Table.Body>
          {cards.data?.items.map(items => {
            return (
              <Table.Row key={items.id}>
                <Table.Cell align={'left'}>
                  <img
                    alt={'Pack cover'}
                    src={items.questionImg ?? defaultMask}
                    style={{ height: '48px', width: '110px' }}
                  />
                  {items.question}
                </Table.Cell>
                <Table.Cell>{items.answer}</Table.Cell>
                <Table.Cell> {new Date(items.updated).toLocaleDateString()}</Table.Cell>
                <Table.Cell>
                  <Rating rating={items.grade} />
                </Table.Cell>
                <Table.Cell>
                  <div>
                    {isMyPack ? (
                      <>
                        <DeleteCardButton id={items.id} name={pack.data?.name || ''} />
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table.Root>
      <Pagination
        className={s.pagination}
        currentPage={currentPageDecks}
        itemsPerPage={itemPerPage}
        onChangeItemsPerPage={setItemPerPage}
        onChangePage={setCurrentPage}
        totalPages={cards.data?.pagination.totalItems}
      />
    </section>
  )
}
