import { render, screen, fireEvent } from '@testing-library/react-native';
import Header from '.';

describe('Header', () => {
  const actions = ['Pomodoro', 'Short break', 'Break'];

  let setActiveActionMock;
  let setTimeMock;

  let pomodoroHeader;
  let shortBreakHeader;
  let breakHeader;

  beforeEach(() => {
    setActiveActionMock = jest.fn();
    setTimeMock = jest.fn();

    render(
      <Header
        activeAction={actions[0]}
        setActiveAction={setActiveActionMock}
        setTime={setTimeMock}
      />
    );

    pomodoroHeader = screen.queryByText('Pomodoro');
    shortBreakHeader = screen.queryByText('Short break');
    breakHeader = screen.queryByText('Break');
  });

  it('should correctly render with all 3 headers', () => {
    expect(pomodoroHeader).toBeTruthy()
    expect(shortBreakHeader).toBeTruthy()
    expect(breakHeader).toBeTruthy()
  });

  it('should call mock function onPress', () => {
    fireEvent(pomodoroHeader, 'press');

    expect(setActiveActionMock).toBeCalledWith(actions[0]);
    expect(setTimeMock).toBeCalledWith(25 * 60);
  });
});
