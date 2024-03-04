import { tabs } from '@/common/consts/tab-switch'
import { Icon } from '@/components/icon/Icon'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { TabSwitcher } from '@/components/ui/tabSwitcher'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'

import s from './filter-control.module.scss'

type FilterControlProps = {
  clearFilter: () => void
  disabled: boolean
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
  disabled,
  searchName,
  setSearchName,
  setSliderValue,
  setTabValue,
  sliderMaxValue = 10,
  sliderValue,
  tabValue,
}: FilterControlProps) => {
  const onChangeSwitcher = (value: string) => {
    setTabValue(value)
  }

  return (
    <div className={s.filter}>
      <TextField
        className={s.textField}
        clearField={() => setSearchName('')}
        disabled={disabled}
        onChange={e => setSearchName(e.currentTarget.value)}
        placeholder={'Search by name'}
        type={'search'}
        value={searchName}
      />
      <TabSwitcher
        disabled={disabled}
        label={'Show decks'}
        onValueChange={onChangeSwitcher}
        tabs={tabs}
        value={tabValue}
      />
      <Slider
        disabled={disabled}
        label={'Number of cards in the deck'}
        max={sliderMaxValue}
        min={0}
        onChange={setSliderValue}
        value={sliderValue}
      />
      <Typography variant={'subtitle2'}>
        <Button
          className={s.clearButton}
          disabled={disabled}
          onClick={clearFilter}
          variant={'secondary'}
        >
          <Icon className={s.icon} name={'remove'} size={'16px'} />
          Clear filters
        </Button>
      </Typography>
    </div>
  )
}
