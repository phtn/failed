import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('<App /> renders', () => {
    const app = render(<App />);
    expect(app);
});

test('Title is React + TypeScript Template', () => {
    const app = render(<App />);
    const title = document.getElementById('title')
    expect(title?.innerHTML).toBe('React + TypeScript Template')
})