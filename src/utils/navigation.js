let navigator;

// Sets a reference to navigation stack
const setNavigator = (navRef) => {
  navigator = navRef;
};

// Returns the current navigation stack
const getNavigation = () => navigator;

// Custom navigate handler allowing stack to be reset in props
const navigate = (screenName, params, resetStack = false) => {
  const navigation = getNavigation();
  // Prevent navigation actions if stack does not exist
  if (!navigation) return null;
  if (resetStack)
    return navigation.reset({
      index: 0,
      routes: [{ name: screenName, params }],
    });
  return navigation.navigate(screenName, params);
};

// Returns a boolean based on if the user can go back further than the current screen
const canGoBack = () => getNavigation().canGoBack();

// Prevent hardware back if back options not available
// This prevents the app closing in Android
const handleHardwareBack = () => !canGoBack();

export { navigate, getNavigation, setNavigator, canGoBack, handleHardwareBack };
