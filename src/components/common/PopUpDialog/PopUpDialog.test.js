import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PopUpDialog from './PopUpDialog'

describe('<PopUpDialog />', () => {
  const translateMock = jest.fn((text) => text)

  test('it should mount', () => {
    render(<PopUpDialog t={translateMock} />)
    const popUpDialog = screen.getByTestId('PopUpDialog')
    expect(popUpDialog).toBeInTheDocument()
  })

  test('check if IconButton is in dialog', () => {
    render(<PopUpDialog t={translateMock} />)
    const popUpDialog = screen.getByTestId('PopUpDialog')
    const iconBtn = popUpDialog.querySelector('.close-btn')
    expect(iconBtn).toBeInTheDocument()
  })
  
  test('check if IconButton calls handleClickToClose', () => {
    const mockFn = jest.fn(false)
    render(<PopUpDialog t={translateMock} handleClickToClose={mockFn}/>)
    const popUpDialog = screen.getByTestId('PopUpDialog')
    const iconBtn = popUpDialog.querySelector('.close-btn')
    fireEvent.click(iconBtn)
    expect(mockFn).toHaveBeenCalled()
  })
})
