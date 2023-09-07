import {
  CommonActions,
  createNavigationContainerRef,
} from '@react-navigation/native';

const navigationRef = createNavigationContainerRef();

function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

function navigateAndReset(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.resetRoot({
      index: 0,
      routes: [{name: name, params: params}],
    });
  }
}

function goBack() {
  navigationRef.dispatch(CommonActions.goBack());
}

function navigatePush(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.push(name, params);
  }
}

export default {
  navigationRef,
  navigate,
  navigateAndReset,
  goBack,
  navigatePush,
};
