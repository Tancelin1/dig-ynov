import { render, screen } from '@testing-library/react';
import FooterLogos from '../components/FooterLogos';

describe('FooterLogos component', () => {
  test('affiche DigYnov', () => {
    render(<FooterLogos />);
    expect(screen.getByText(/digynov/i)).toBeInTheDocument();
  });
});