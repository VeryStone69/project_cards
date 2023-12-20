import type {Meta, StoryObj} from '@storybook/react'

import {FormValues, ForgotPassword} from './forgot-password'

const meta = {
    title: 'Components/Forms/ForgotPassword',
    component: ForgotPassword,
    tags: ['autodocs'],
} satisfies Meta<typeof ForgotPassword>

export default meta
type Story = StoryObj<typeof meta>

export const ForgotPasswordForm: Story = {
    render: () => {
        const onSubmit = (data: FormValues) => {

            console.log(data)
        }

        return <ForgotPassword onSubmit={onSubmit}/>
    },
    args: {} as any,
}