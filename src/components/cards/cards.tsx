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
import { AddNewCard } from '@/features/add-new-card'
import { DeleteCardButton } from '@/features/delete-card-button/delete-card-button'
import { DropdownCard } from '@/features/dropdown-card/dropdown-card'
import { EditCard } from '@/features/edit-card'
import { useGetCardsInDeckQuery } from '@/services/cards-api/cards-api'
import { useGetDeckInfoQuery } from '@/services/decks-api/decks-api'

import s from './cards.module.scss'

import defaultMask from '../../assets/images/not-img.jpg'

export const Cards = () => {
  const { id } = useParams()
  const [itemPerPage, setItemPerPage] = useState(5)
  const [currentPageDecks, setCurrentPage] = useState(1)
  const packId = id ?? ('' as string)
  const isMyPack = 'authUserId === pack.author.id' && true

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

  isMyPack
    ? cardsColumns.push({
        key: 'edit',
        sortable: true,
        title: '',
      })
    : false

  return (
    <section className={s.layout}>
      <BackButton />

      <div className={s.section}>
        <div className={s.sectionHeader}>
          <Typography variant={'large'}>{pack.data?.name}</Typography>

          {isMyPack && (
            <Dropdown align={'center'} className={s.dropDown} sideOffset={-10}>
              <DropdownCard />
            </Dropdown>
          )}

          {isMyPack ? (
            <AddNewCard />
          ) : (
            <Button as={Link} to={`learn`}>
              <Typography variant={'subtitle2'}>Learn cards</Typography>
            </Button>
          )}
        </div>
        {pack.data?.cover && (
          <img
            alt={'Cover'}
            className={s.packsImg}
            src={pack.data.cover ? pack.data.cover : defaultMask}
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
      <Table.Root className={s.table}>
        <TableHeader columns={cardsColumns} />
        <Table.Body>
          {cards.data?.items.map(items => {
            return (
              <Table.Row key={items.id}>
                <Table.Cell className={s.questionCell}>
                  <img
                    alt={'Pack cover'}
                    className={s.questionImg}
                    src={items.questionImg ?? defaultMask}
                  />
                  <p>{items.question}</p>
                </Table.Cell>
                <Table.Cell className={s.answerCell}>
                  <img
                    alt={'Pack cover'}
                    className={s.answerImg}
                    src={items.answerImg ?? defaultMask}
                  />
                  <p>{items.answer}</p>
                </Table.Cell>
                <Table.Cell className={s.dateCell}>
                  {new Date(items.updated).toLocaleDateString()}
                </Table.Cell>
                <Table.Cell className={s.rateCell}>
                  <Rating rating={items.grade} />
                </Table.Cell>

                {isMyPack && (
                  <Table.Cell>
                    <div className={s.editButtons}>
                      <EditCard />
                      <DeleteCardButton id={items.id} name={pack.data?.name || ''} />
                    </div>
                  </Table.Cell>
                )}
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
