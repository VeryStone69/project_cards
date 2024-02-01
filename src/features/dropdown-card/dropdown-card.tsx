import { Icon } from '@/components/icon/Icon'
import { DropdownItemContent } from '@/components/ui/dropdown'

import s from './dropdown-card.module.scss'
export const DropdownCard = () => {
  return (
    <div className={s.dropdownCard}>
      <DropdownItemContent
        className={s.itemContent}
        icon={<Icon name={'edit'} size={'20px'} />}
        onSelect={() => {}}
        title={'Edit'}
      />
      <DropdownItemContent
        className={s.itemContent}
        icon={<Icon name={'play'} size={'20px'} />}
        onSelect={() => {}}
        title={'Learn'}
      />
      <DropdownItemContent
        className={s.itemContent}
        icon={<Icon name={'remove'} size={'20px'} />}
        onSelect={() => {}}
        style={{ alignItems: 'center', display: 'flex' }}
        title={'Delete'}
      />
    </div>
  )
}
