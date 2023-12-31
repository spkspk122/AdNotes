import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'NotesApp',
      storage: AsyncStorage,
      whitelist: ['notesReducer'],
    },
    reducers,
  );

  return persistedReducer;
};
