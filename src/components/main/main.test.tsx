import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Main } from '.'

describe('Main', () => {
  it('should be able to render correctly', () => {
    render(<Main />)
    expect(
      screen.getByRole('heading', { name: /boilerplate/i, level: 1 })
    ).toBeInTheDocument()
  })
})
