import type {Meta, StoryObj} from '@storybook/react'

import {Rating} from "@/components/ui/rating/rating";

const meta = {
    component: Rating,
    parameters: {
        layout: 'centered',
    },
    title: 'Components/ui/Rating',
} satisfies Meta<typeof Rating>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render() {
        return (
            <Rating/>
        )
    },
}

