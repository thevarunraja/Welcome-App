import React from "react";

const RootContext = React.createContext();

const initialState = {
  fontLoaded: false,
  line1Text: "",
  line2Text: "",
  boardFont: "Open Sans",
  boardImage: true,
  showModal: false,
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "SET_FONT_LOADED_TRUE":
      return {
        ...state,
        fontLoaded: true,
      };
    case "SET_LINE1_TEXT":
      return {
        ...state,
        line1Text: payload,
      };
    case "SET_LINE2_TEXT":
      return {
        ...state,
        line2Text: payload,
      };
    case "SET_BOARD_FONT":
      return {
        ...state,
        boardFont: payload,
      };
    case "TOGGLE_BOARD_IMAGE":
      return {
        ...state,
        boardImage: payload,
      };
    case "SET_SHOW_MODAL":
      return {
        ...state,
        showModal: payload,
      };
    default:
      return state;
  }
}

function RootProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <RootContext.Provider
      value={{
        fontLoaded: state.fontLoaded,
        line1Text: state.line1Text,
        line2Text: state.line2Text,
        boardImage: state.boardImage,
        boardFont: state.boardFont,
        showModal: state.showModal,
        setFontLoadedTrue: () => {
          dispatch({
            type: "SET_FONT_LOADED_TRUE",
          });
        },
        setLine1Text: value => {
          dispatch({
            type: "SET_LINE1_TEXT",
            payload: value,
          });
        },
        setLine2Text: value => {
          dispatch({
            type: "SET_LINE2_TEXT",
            payload: value,
          });
        },
        toggleBoardImage: value => {
          dispatch({
            type: "TOGGLE_BOARD_IMAGE",
            payload: value,
          });
        },
        setBoardFont: value => {
          //FIXME: Doesn't work this way, change implementation
          dispatch({
            type: "SET_BOARD_FONT",
            payload: value,
          });
        },
        setShowModal: value => {
          dispatch({
            type: "SET_SHOW_MODAL",
            payload: value,
          });
        },
      }}>
      {props.children}
    </RootContext.Provider>
  );
}

function useRootContext() {
  return React.useContext(RootContext);
}

export { useRootContext, RootProvider };
