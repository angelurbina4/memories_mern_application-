import { AUTH } from '../contants/actionTypes';
import * as api from '../api';

export const signin = (formData, navigate ) => async (dispatch) => {
  try {
     // log in the user...

     navigate('/', {replace: true});
  } catch (error) {
    console.log(error) ;
  }
};

export const signup = (formData, navigate ) => async (dispatch) => {
  try {
     // sign out the user...

     navigate('/', {replace: true});
  } catch (error) {
    console.log(error) ;
  }
};