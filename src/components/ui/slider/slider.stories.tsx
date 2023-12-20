import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Slider } from './'

const meta = {
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/ui/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultSlider: Story = {
  args: {
    label: 'Page size',
    max: 100,
    min: 0,
    value: [0, 100],
  },
  render: args => {
    const [sliderValue, setSliderValue] = useState<number[]>(args.value)

    const onChangeSliderValue = (value: number[]) => {
      setSliderValue(value)
    }

    return <Slider {...args} onChange={onChangeSliderValue} value={sliderValue} />
  },
}
