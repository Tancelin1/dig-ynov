import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from '../components/Navigation';

describe('Navigation component', () => {
  test('affiche le lien Accueil', () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );
    expect(screen.getByText(/accueil/i)).toBeInTheDocument();
  });
});