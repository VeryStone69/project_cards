import {useState} from 'react'

import type {Meta, StoryObj} from '@storybook/react'

import {Slider} from './'

const meta = {
    parameters: {
        layout: 'centered'
    },
    title: 'Components/ui/Slider',
    component: Slider,
    tags: ['autodocs'],
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultSlider: Story = {
    render: args => {
        const [sliderValue, setSliderValue] = useState<number[]>(args.value)

        const onChangeSliderValue = (value: number[]) => {
            setSliderValue(value)
        }

        return <Slider {...args} value={sliderValue} onChange={onChangeSliderValue}/>
    },
    args: {
        min: 0,
        max: 100,
        value: [0, 100],
        label: 'Page size',
    },
}
