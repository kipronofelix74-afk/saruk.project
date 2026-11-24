import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('Personal Project Showcase App', () => {
  it('renders initial projects from the mockup', () => {
    render(<App />);
    expect(screen.getByText('iphone 17 pro max')).toBeInTheDocument();
    expect(screen.getByText('iphone 17 max')).toBeInTheDocument();
    expect(screen.getByText('iphone 15 pro max')).toBeInTheDocument();
    expect(screen.getByText('iphone 15 max')).toBeInTheDocument();
  });

  it('allows adding a new project', async () => {
    render(<App />);
    const user = userEvent.setup();

    await user.type(screen.getByLabelText(/title/i), 'New Portfolio Website');
    await user.type(screen.getByLabelText(/description/i), 'Built with React and Tailwind.');
    await user.click(screen.getByRole('button', { name: /add/i }));

    expect(screen.getByText('New Portfolio Website')).toBeInTheDocument();
    expect(screen.getByText('Built with React and Tailwind.')).toBeInTheDocument();
  });

  it('filters projects dynamically based on search query', async () => {
    render(<App />);
    const user = userEvent.setup();

    const searchInput = screen.getByPlaceholderText(/search projects/i);
    await user.type(searchInput, 'Baba Fua');

    expect(screen.getByText('Baba Fua Project')).toBeInTheDocument();
    expect(screen.queryByText('Lawyer Portal')).not.toBeInTheDocument();
  });
});