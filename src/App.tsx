import { Button } from '@/components/ui/button'

export function App() {
  return (
    <div>
      <Button>Primary Button</Button>
      <Button<'a'> href={'google.com'} rel={'noopener noreferrer'} target={'_blank'}>
        Primary Button 2
      </Button>
    </div>
  )
}
