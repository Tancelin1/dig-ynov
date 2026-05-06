import { render, screen } from '@testing-library/react';
import ContactSection from '../components/ContactSection';

describe('ContactSection component', () => {
  test('affiche l’adresse mail', () => {
    render(<ContactSection />);
    expect(screen.getByText(/digynov@gmail.com/i)).toBeInTheDocument();
  });
});