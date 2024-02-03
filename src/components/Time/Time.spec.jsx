import { render, screen, fireEvent } from '@testing-library/react-native';
import Time from '.';

describe('Time', () => {
  const mockTime = 1500

  beforeEach(() => { 
    render(<Time time={mockTime} />);
  })

  it('should correctly render with time formatted', () => { 
    const timer = screen.queryByText('25:00');

    expect(timer).toBeTruthy();
  })
})