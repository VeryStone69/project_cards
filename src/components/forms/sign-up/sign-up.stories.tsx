import type {Meta, StoryObj} from '@storybook/react'

import {FormValues, SignUp} from './sign-up'

const meta = {
    title: 'Components/Forms/SignUn',
    component: SignUp,
    tags: ['autodocs'],
} satisfies Meta<typeof SignUp>

export default meta
type Story = StoryObj<typeof meta>

export const SignInForm: Story = {
    render: () => {
        const onSubmit = (data: FormValues) => {

            console.log(data)
        }

        return <SignUp onSubmit={onSubmit}/>
    },
    args: {} as any,
}