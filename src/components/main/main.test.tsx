import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Main } from '.'

describe('Main', () => {
  it('should be able to render correctly', () => {
    render(<Main />)
    expect(
      screen.getByRole('heading', { name: /main component/i })
    ).toBeDefined()
  })

  it('should be able to heading with the text-red-600 color', () => {
    render(<Main />)
    expect(
      screen.getByRole('heading', { name: /main component/i })
    ).toHaveProperty('className', 'text-red-600')
  })
})
