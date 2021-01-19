import React from 'react';
import AuthScreen from './auth';
import { fireEvent, render, cleanup } from '@testing-library/react-native';

afterEach(cleanup);

describe('Auth screen', () => {
  describe('given default props', () => {
    let renderedComponent;

    const testProps = {
      navigation: {
        navigate: jest.fn(),
      },
    };

    beforeEach(() => {
      renderedComponent = render(
        <AuthScreen navigation={testProps.navigation} />,
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
      expect(testProps.navigation.navigate).toHaveBeenCalledWith('Dashboard');
    });
  });
});
