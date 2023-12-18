import {useState} from 'react'

import type {Meta, StoryObj} from '@storybook/react'

import {TextField} from './'

const meta = {
    title: 'Components/TextField',
    component: TextField,
    tags: ['autodocs'],
    argTypes: {
        type: {
            options: ['text', 'search', 'password'],
            control: {type: 'radio'},
        },
    },
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Text = {
    render: () => {
        const [state, setState] = useState('')

        return (
            <TextField
                value={state}
                placeholder="Placeholder"
                label="Email text field"
                name={'email'}
                onChange={e => setState(e.currentTarget.value)}
                clearField={() => setState('')}
            />
        )
    },
}

export const Password = {
    render: () => {
        const [state, setState] = useState('')

        return (
            <TextField
                type={'password'}
                placeholder="Placeholder"
                label="Password text field"
                value={state}
                onChange={e => setState(e.currentTarget.value)}
                clearField={() => setState('')}
            />
        )
    },
}

export const Search = {
    render: () => {
        const [state, setState] = useState('')

        return (
            <TextField
                type={'search'}
                placeholder="Placeholder"
                label="Search text field"
                value={state}
                onChange={e => setState(e.currentTarget.value)}
                clearField={() => setState('')}
            />
        )
    },
}

export const WithError: Story = {
    args: {
        placeholder: 'Placeholder',
        label: 'Error text field',
        errorMessage: 'Some error',
    },
}

export const Disabled: Story = {
    args: {
        type: 'password',
        placeholder: 'Placeholder',
        label: 'label',
        disabled: true,
    },
}
