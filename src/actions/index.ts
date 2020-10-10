import axios from 'axios';
import { Dispatch } from 'redux';
import { url } from '../config';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);

    dispatch({
      type: 'FETCH_TODOS',
      payload: response.data,
    });
  };
};
