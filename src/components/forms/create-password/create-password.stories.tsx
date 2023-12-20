import type {Meta, StoryObj} from '@storybook/react'

import {FormValues, CreatePassword} from './create-password'

const meta = {
    title: 'Components/Forms/CreatePassword',
    component: CreatePassword,
    tags: ['autodocs'],
} satisfies Meta<typeof CreatePassword>

export default meta
type Story = StoryObj<typeof meta>

export const CreatePasswordFrom: Story = {
    render: () => {
        const onSubmit = (data: FormValues) => {

            console.log(data)
        }

        return <CreatePassword onSubmit={onSubmit}/>
    },
    args: {} as any,
}