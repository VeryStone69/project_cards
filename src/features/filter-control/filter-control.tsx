import { Icon } from '@/components/icon/Icon'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { Tabs, TabSwitcher } from '@/components/ui/tabSwitcher'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'

import s from './filter-control.module.scss'

type FilterControlProps = {
  clearFilter: () => void
  searchName: string
  setSearchName: (value: string) => void
  setSliderValue: (newValue: number[]) => void
  setTabValue: (value: string) => void
  sliderMaxValue?: number
  sliderValue: number[]
  tabValue: string
}
export const FilterControl = ({
  clearFilter,
  searchName,
  setSearchName,
  setSliderValue,
  setTabValue,
  sliderMaxValue = 10,
  sliderValue,
  tabValue,
}: FilterControlProps) => {
  const tabs: Tabs[] = [
    { disabled: false, title: 'My decks', value: 'my' },
    { disabled: false, title: 'All decks', value: 'all' },
  ]

  const onChangeSwitcher = (value: string) => {
    setTabValue(value)
  }

  return (
    <div className={s.filter}>
      <TextField
        className={s.textField}
        clearField={() => setSearchName('')}
        onChange={e => setSearchName(e.currentTarget.value)}
        placeholder={'Search by name'}
        type={'search'}
        value={searchName}
      />
      <TabSwitcher
        label={'Show decks'}
        onValueChange={onChangeSwitcher}
        tabs={tabs}
        value={tabValue}
      />
      <Slider
        label={'Number of cards in the deck'}
        max={sliderMaxValue}
        min={0}
        onChange={setSliderValue}
        value={sliderValue}
      />
      <Button className={s.clearButton} onClick={clearFilter} variant={'secondary'}>
        <Icon className={s.icon} name={'remove'} size={'16px'} />
        <Typography variant={'subtitle2'}> Clear filters</Typography>
      </Button>
    </div>
  )
}
