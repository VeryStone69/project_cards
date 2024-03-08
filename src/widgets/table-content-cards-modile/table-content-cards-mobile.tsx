import { Typography } from '@/components/ui/typography'
import { CardsResponse } from '@/services/cards-api/cards-api-types'
import { CardContent } from '@/widgets/table-content-cards-modile/card-content/card-content'

import s from './table-content-cards-mobile.module.scss'

type Props = {
  cardsData?: CardsResponse
  deckName?: string
  isMyPack: boolean
}

export const TableContentCardsMobile = ({ cardsData, deckName, isMyPack }: Props) => {
  if (!cardsData?.items.length) {
    return (
      <div className={s.noItems}>
        <Typography variant={'body1'}>No content with these terms...</Typography>
      </div>
    )
  }

  return (
    <div className={s.contentblock}>
      {cardsData?.items.map(items => (
        <CardContent deckName={deckName} isMyPack={isMyPack} items={items} key={items.id} />
      ))}
    </div>
  )
}
