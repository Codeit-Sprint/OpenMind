import { useReducer, useEffect } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        data: null,
        error: null,
      };
    case 'SUCCESS':
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case 'ERROR':
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const useAsync = (callback, deps = [], skip = false) => {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  const refetch = async (...args) => {
    dispatch({ type: 'LOADING' });

    try {
      const data = await callback(args);
      dispatch({ type: 'SUCCESS', data });

      return data;
    } catch (err) {
      dispatch({ type: 'ERROR', error: err });
      return err;
    }
  };

  useEffect(() => {
    if (skip) return;
    refetch();

    //eslint-disable-next-line
  }, deps);

  return { state, refetch };
};

export default useAsync;
