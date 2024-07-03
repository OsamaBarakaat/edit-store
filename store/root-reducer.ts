import { combineReducers } from '@reduxjs/toolkit';
import { reducer as styleSettings } from './slices/styleSettings';

export const rootReducer = combineReducers({
  styleSettings: styleSettings,
});
