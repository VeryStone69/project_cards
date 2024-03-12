import { useTranslation } from 'react-i18next'

import { Typography } from '@/components/ui/typography'
import * as TabsSwitcher from '@radix-ui/react-tabs'
import { clsx } from 'clsx'

import s from './tabSwitcher.module.scss'

export type Tabs = {
  disabled: boolean
  title: string
  value: string
}
type TabSwitcherProps = {
  className?: string
  disabled: boolean
  label?: string
  onValueChange: (value: string) => void
  tabs: Tabs[]
  value: string
}

export const TabSwitcher = ({
  className,
  disabled,
  label,
  onValueChange,
  tabs,
  value,
}: TabSwitcherProps) => {
  const classes = clsx(className)
  const { t } = useTranslation()

  return (
    <>
      <Typography as={'div'} className={classes} variant={'body1'}>
        {label}
        <TabsSwitcher.Root className={s.TabsRoot} onValueChange={onValueChange} value={value}>
          <TabsSwitcher.List className={s.TabsList}>
            {tabs.map(tabs => {
              return (
                <TabsSwitcher.Trigger
                  className={s.TabsTrigger}
                  disabled={disabled}
                  key={tabs.value}
                  value={tabs.value}
                >
                  {t(`decks.tabSwitcher.${tabs.value}`)}
                </TabsSwitcher.Trigger>
              )
            })}
          </TabsSwitcher.List>
        </TabsSwitcher.Root>
      </Typography>
    </>
  )
}
