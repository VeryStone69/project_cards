import { useState } from 'react'

import { FilterControl } from '@/features/filter-control/filter-control'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  args: {
    searchName: '',
    setSearchName: () => {},
    setSliderValue: () => {},
    setTabValue: () => {},
    sliderValue: [0],
    tabValue: '1',
  },
  component: FilterControl,
  tags: ['autodocs'],
  title: 'Components/features/filter-control',
} satisfies Meta<typeof FilterControl>

export default meta
type Story = StoryObj<typeof meta>

export const FilterComponent: Story = {
  render: () => {
    const sliderValueRange = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const [name, setName] = useState('')
    const [sliderValue, setSliderValue] = useState(sliderValueRange)
    const [tabValue, setTabValue] = useState('')

    return (
      <FilterControl
        clearFilter={() => {
          setTabValue('')
          setName('')
        }}
        searchName={name}
        setSearchName={setName}
        setSliderValue={setSliderValue}
        setTabValue={setTabValue}
        sliderValue={sliderValue}
        tabValue={tabValue}
      />
    )
  },
}
