import { render } from '@testing-library/react-native';

describe('App', () => {
  it('should have maximum lives by default', async () => {
    const { findAllByTestId } = render(<App />);
    const hearts = await findAllByTestId('heart-full');
    expect(hearts).toHaveLength(maxLives);
  });
 }