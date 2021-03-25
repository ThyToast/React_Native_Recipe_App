import React, {useReducer, createContext} from 'react';

const createDataContext = (reducer: any, actions: any, defaultValue: any) => {
  const Context = createContext({});

  const Provider = ({children}: any) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);

    const boundAction: any = {};
    for (let key in actions) {
      boundAction[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{state, ...boundAction}}>
        {children}
      </Context.Provider>
    );
  };

  return {Context, Provider};
};

export default createDataContext;
