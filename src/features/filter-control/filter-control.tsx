import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()

  return (
    <div className={s.filter}>
      <TextField
        className={s.textField}
        clearField={() => setSearchName('')}
        disabled={disabled}
        onChange={e => setSearchName(e.currentTarget.value)}
        placeholder={t('decks.search.placeholder')}
        type={'search'}
        value={searchName}
      />

      <div className={s.setting}>
        <TabSwitcher
          className={s.tabSwitcher}
          disabled={disabled}
          label={t('decks.tabSwitcher.title')}
          onValueChange={onChangeSwitcher}
          tabs={tabs}
          value={tabValue}
        />
        <Slider
          className={s.slider}
          disabled={disabled}
          label={t('decks.slider.title')}
          max={sliderMaxValue}
          min={0}
          onChange={setSliderValue}
          value={sliderValue}
        />
        <Typography className={s.clearButtonBlock} variant={'subtitle2'}>
          <Button
            className={s.clearButton}
            disabled={disabled}
            onClick={clearFilter}
            variant={'secondary'}
          >
            <Icon className={s.icon} name={'remove'} size={'16px'} />
            {t('decks.clearFilter.title')}
          </Button>
        </Typography>
      </div>
    </div>
  )
}
