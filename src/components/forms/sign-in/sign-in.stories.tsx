import type {Meta, StoryObj} from '@storybook/react'

import {FormValues, SignIn} from './sign-in'

const meta = {
    title: 'Components/Forms/SignIn',
    component: SignIn,
    tags: ['autodocs'],
} satisfies Meta<typeof SignIn>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => {
        const onSubmit = (data: FormValues) => {

            console.log(data)
        }

        return <SignIn onSubmit={onSubmit}/>
    },
    args: {} as any,
}