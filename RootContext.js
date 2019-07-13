import React from "react";

const RootContext = React.createContext();

const initialState = {
  fontLoaded: false
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "SET_FONT_LOADED_TRUE":
      return {
        ...state,
        fontLoaded: true
      };
  }
}

function RootProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <RootContext.Provider
      value={{
        fontLoaded: state.fontLoaded,
        setFontLoadedTrue: () => {
          dispatch({
            type: "SET_FONT_LOADED_TRUE"
          });
        }
      }}
    >
      {props.children}
    </RootContext.Provider>
  );
}

function useRootContext() {
  return React.useContext(RootContext);
}

export { useRootContext, RootProvider };
