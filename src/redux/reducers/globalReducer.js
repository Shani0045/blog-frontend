
const initialState = {
      loading: false,
      error: null,
      data: ""
  };

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ckEditorData":
        return {
          ...state,
            loading: false,
            error: null,
            data: action.payload
        };
  
      default:
        return state;
    }
};

export default globalReducer

