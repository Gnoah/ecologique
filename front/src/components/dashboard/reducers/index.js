import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import ThemeOptions from './ThemeOptions';
import Layout from './Layout';

export default {
  ThemeOptions,
  Layout,
  form: formReducer
};