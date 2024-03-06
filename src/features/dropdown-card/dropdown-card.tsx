import { useNavigate } from 'react-router-dom'

import { PATH } from '@/common/consts/routes'
import { Icon } from '@/components/icon/Icon'
import { DropdownItemContent } from '@/components/ui/dropdown'

import s from './dropdown-card.module.scss'

type Props = {
  setDeleteDeckModal: (value: boolean) => void
  setEditDeckModal: (value: boolean) => void
}

export const DropdownCard = ({ setDeleteDeckModal, setEditDeckModal }: Props) => {
  const navigate = useNavigate()

  return (
    <div className={s.dropdownCard}>
      <DropdownItemContent
        className={s.itemContent}
        icon={<Icon name={'edit'} size={'20px'} />}
        onSelect={() => setEditDeckModal(true)}
        title={'Edit'}
      />
      <DropdownItemContent
        className={s.itemContent}
        icon={<Icon name={'play'} size={'20px'} />}
        onSelect={() => navigate(`.${PATH.learn}`)}
        title={'Learn'}
      />
      <DropdownItemContent
        className={s.itemContent}
        icon={<Icon name={'remove'} size={'20px'} />}
        onSelect={() => setDeleteDeckModal(true)}
        style={{ alignItems: 'center', display: 'flex' }}
        title={'Delete'}
      />
    </div>
  )
}
