import DropdownMenuDemo, {
  DropDownItem,
  DropDownItemWithIcon,
} from '@/components/ui/dropdown/Dropdown'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Meta, StoryObj } from '@storybook/react'

import s from '@/components/ui/dropdown/dropdown.module.scss'

const meta = {
  argTypes: {},
  component: DropdownMenuDemo,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  title: 'Components/ui/DropdownMenuDemo',
} satisfies Meta<typeof DropdownMenuDemo>

export default meta
type Story = StoryObj<typeof meta>

export const DropDownWithlUserLogo: Story = {
  args: {
    label: 'This is dropdown',
  },
  render: function Render() {
    return (
      <>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <img className={s['userLogo']} />
          </DropdownMenu.Trigger>

          <DropdownMenu.Content className={s['DropdownMenuContent']} sideOffset={8}>
            <DropdownMenu.Arrow className={s['DropdownMenuArrow']} height={8} width={14} />

            <DropDownItem
              classNameItem={s.DropdownMenuItem}
              classNameSVG={s.userLogo}
              userEmail={'j&johnson@gmail.com'}
              userName={'Ivan'}
            />
            <DropDownItemWithIcon
              classNameItem={s.itemWithIcon}
              classNameSVG={s.svgWhite}
              svgId={'logoUserDrop'}
              textItem={'My profile'}
            />
            <DropDownItemWithIcon
              classNameItem={s.itemWithIcon}
              classNameSVG={s.svgWhite}
              svgId={'logout'}
              textItem={'Sign Out'}
            />
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </>
    )
  },
}

export const DropDownWithSVGList: Story = {
  args: {
    label: 'This is dropdown',
  },
  render: function Render() {
    return (
      <>
        <span> This is default drop-down-menu button:</span>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button
              style={{ border: '1px solid yellowgreen', borderRadius: '5px', margin: '10px' }}
            >
              test
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Content className={s['DropdownMenuContent']} sideOffset={8}>
            <DropdownMenu.Arrow className={s['DropdownMenuArrow']} height={8} width={14} />
            <DropDownItemWithIcon
              classNameItem={s.itemWithIcon}
              classNameSVG={s.svgWhite}
              svgId={'playLearn'}
              textItem={'My profile'}
            />
            <DropDownItemWithIcon
              classNameItem={s.itemWithIcon}
              classNameSVG={s.svgWhite}
              svgId={'edit'}
              textItem={'My profile'}
            />
            <DropDownItemWithIcon
              classNameItem={s.itemWithIcon}
              classNameSVG={s.svgWhite}
              svgId={'trashBin'}
              textItem={'Sign Out'}
            />
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </>
    )
  },
}
