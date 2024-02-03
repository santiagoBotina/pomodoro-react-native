import { render, screen, fireEvent } from '@testing-library/react-native';
import Button from '.';

describe('Button', () => {
  let mockFn;

  beforeEach(() => { 
    mockFn = jest.fn()
  })

  it('should correctly render', () => { 
    render(<Button title='test' onPress={mockFn} />);

    const button = screen.queryByText('test');

    expect(button).toBeTruthy();
  })
  it('should call mock function onPress', () => { 
    render(<Button title='test' onPress={mockFn} />);

    const button = screen.queryByText('test');

    fireEvent(button, 'press');

    expect(mockFn).toBeCalled();
  })
})