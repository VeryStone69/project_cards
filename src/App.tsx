import { Header } from '@/components/header'
import { Icon } from '@/components/icon/Icon'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

export function App() {
  return (
    <div>
      <Typography variant={'subtitle2'}>
        <Button variant={'primary'}>Primary Button</Button>
      </Typography>

      <Typography color={'--color-accent-500'} variant={'subtitle2'}>
        <Button variant={'tertiary'}>Tertiary Button</Button>
      </Typography>

      <Typography variant={'subtitle2'}>
        <Button variant={'primary'}>
          <Icon name={'logout'} size={'16'} />
          Primary Button
        </Button>
      </Typography>

      <Typography variant={'subtitle1'}>
        <Button variant={'link'}>Link-button</Button>
      </Typography>

      <Button<'a'> href={'google.com'} rel={'noopener noreferrer'} target={'_blank'}>
        Primary Button 2
      </Button>

      {/*<Header />*/}
    </div>
  )
}
