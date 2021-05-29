import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

import HeaderComponent from 'components/general/HeaderComponent';

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

  test('match snapshot', () => {
    const tree = renderer.create(<HeaderComponent {...userInfo} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
