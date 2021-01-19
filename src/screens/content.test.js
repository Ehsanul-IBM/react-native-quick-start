import React from 'react';
import ContentScreen from './content';
import { fireEvent, render, cleanup } from '@testing-library/react-native';

afterEach(cleanup);

describe('Content screen', () => {
  describe('given default props', () => {
    let renderedComponent;

    const testProps = {
      navigation: {
        navigate: jest.fn(),
      },
    };

    beforeEach(() => {
      renderedComponent = render(
        <ContentScreen navigation={testProps.navigation} />,
      );
    });

    it('should render correctly', () => {
      const { toJSON } = renderedComponent;
      expect(toJSON()).toMatchSnapshot();
    });

    it('should navigate to auth page when touchable highlight is selected', () => {
      const { getByRole } = renderedComponent;
      fireEvent.press(getByRole('touchable'));

      expect(testProps.navigation.navigate).toHaveBeenCalled();
      expect(testProps.navigation.navigate).toHaveBeenCalledWith('Auth');
    });
  });
});
