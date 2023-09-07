import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'AwesomeProject',
      storage: AsyncStorage,
      whitelist: ['cartReducer'],
    },
    reducers,
  );

  return persistedReducer;
};
