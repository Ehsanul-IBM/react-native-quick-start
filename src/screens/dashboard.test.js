import React from 'react';
import DashboardScreen from './dashboard';
import { fireEvent, render, cleanup } from '@testing-library/react-native';
import { NavigationContext } from '@react-navigation/native';

afterEach(cleanup);

describe('Dashboard screen', () => {
  describe('given default props', () => {
    let renderedComponent;

    const testProps = {
      navigation: {
        navigate: jest.fn(),
      },
    };

    const navContext = {
      isFocused: () => true,
      addListener: jest.fn(() => jest.fn()),
    };

    beforeEach(() => {
      renderedComponent = render(
        <NavigationContext.Provider value={navContext}>
          <DashboardScreen navigation={testProps.navigation} />
        </NavigationContext.Provider>,
      );
    });

    it('should render correctly', () => {
      const { toJSON } = renderedComponent;
      expect(toJSON()).toMatchSnapshot();
    });

    it('should navigate to dashboard page when touchable highlight is selected', () => {
      const { getByRole } = renderedComponent;
      fireEvent.press(getByRole('touchable'));

      expect(testProps.navigation.navigate).toHaveBeenCalled();
      expect(testProps.navigation.navigate).toHaveBeenCalledWith('Content');
    });
  });
});
