import { CSSProperties } from 'react'

import { Button } from '@/components/ui/button'
import { Table } from '@/components/ui/table/table'
import { Typography } from '@/components/ui/typography'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Table.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/ui/Table',
} satisfies Meta<typeof Table.Root>

export default meta
type Story = StoryObj<typeof meta>
const description =
  'ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam commodi consequuntur '
const data = [
  {
    date: `${new Date().getDate()} ${new Date().getMonth() + 1} ${new Date().getFullYear()}`,
    description: description,
    id: '01',
    link: {
      path: 'https://github.com/artyomkorshykau',
      title: 'Github',
    },
    number: 1,
    type: 'Frontend',
  },
  {
    date: `${new Date().getDate()} ${new Date().getMonth() + 1} ${new Date().getFullYear()}`,
    description: description,
    id: '02',
    link: {
      path: 'https://github.com/dktwho',
      title: 'Github',
    },
    number: 2,
    type: 'Frontend',
  },
  {
    date: `${new Date().getDate()} ${new Date().getMonth() + 1} ${new Date().getFullYear()}`,
    description: description,
    id: '03',
    link: {
      path: 'https://github.com/exleonardo',
      title: 'Github',
    },
    number: 3,
    type: 'Frontend',
  },
]

export const Default: Story = {
  render: () => {
    return (
      <Table.Root>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>№</Table.HeadCell>
            <Table.HeadCell>Description</Table.HeadCell>
            <Table.HeadCell>Link</Table.HeadCell>
            <Table.HeadCell>Type</Table.HeadCell>
            <Table.HeadCell>Date</Table.HeadCell>
            <Table.HeadCell />
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {data.map(table => (
            <Table.Row key={table.id}>
              <Table.Cell>{table.number}</Table.Cell>
              <Table.Cell>{table.description}</Table.Cell>
              <Table.Cell>
                {' '}
                <Typography as={'a'} href={table.link.path} target={'_blank'} variant={'link1'}>
                  Link
                </Typography>
              </Table.Cell>
              <Table.Cell>{table.type}</Table.Cell>
              <Table.Cell>{table.date}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    )
  },
}

export const Empty = {
  render: () => {
    const styles: CSSProperties = {
      color: 'var(--color-dark-100)',

      marginBottom: '30px',
    }

    return (
      <Table.Empty>
        <Typography style={styles} variant={'body1'}>
          This pack is empty. Click add new card to fill this pack
        </Typography>
        <Button>Add New Card</Button>
      </Table.Empty>
    )
  },
}
