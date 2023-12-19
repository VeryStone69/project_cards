import {Meta, StoryObj} from '@storybook/react'

import {Card} from './'
import {Typography} from "@/components/ui/typography";

const meta = {
    component: Card,
    title: 'Components/Forms/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultCard: Story = {
    args: {
        children: <Typography variant={'large'}></Typography>,
        style: {
            height: '520px',
            padding: '24px',
            width: '420px',
        },
    },
}
