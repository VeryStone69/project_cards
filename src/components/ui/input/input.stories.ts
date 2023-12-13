import type {Meta, StoryObj} from '@storybook/react'

import {Input} from './'

const meta = {
    argTypes: {
        variant: {
            control: {type: 'radio'},
            options: ['primaryInput', 'inputWithIcon', 'searchInput'],
        },
    },
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>


export const Inputs: Story = {
    args: {
        disabled: false,
        error: false,
        errorTitle: '',
        label: 'label',
        placeholder: 'Placeholder',
        variant: 'primaryInput',
    },
}


