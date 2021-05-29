import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

import HeaderComponent from 'components/general/HeaderComponent';
import { BALANCE } from 'constants/texts';

const userInfo = {
  account_id: 'a31a9c62-001b-40c5-8903-48318555b4e7',
  balance: 100,
};

afterEach(() => {
  cleanup();
});

describe('Test', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      value: jest.fn(() => {
        return {
          matches: true,
          addListener: jest.fn(),
          removeListener: jest.fn(),
        };
      }),
    });
  });
  test('should render HeaderComponent component correctly', () => {
    const Header = render(<HeaderComponent {...userInfo} />);
    const headerComponent = screen.getByTestId('header');
    expect(headerComponent).toBeInTheDocument();
    expect(headerComponent).toHaveTextContent('');
    expect(headerComponent).toContainHTML('<img src="profile_icon.png" />');
  });

  it('Text in state is changed when button clicked', () => {
    const { getByText } = render(<HeaderComponent {...userInfo} />);

    // expect(getByText(BALANCE).textContent).toBe(BALANCE)

    // fireEvent.click(getByText("State Change Button"))
    //
    // expect(getByText(/Initial/i).textContent).toBe("Initial State Changed")
  });

  test('match snapshot', () => {
    const tree = renderer.create(<HeaderComponent {...userInfo} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
