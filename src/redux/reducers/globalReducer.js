
const initialState = {
      loading: false,
      error: null,
      data: ""
  };

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ckEditorData":
        return action.payload

      case "category_data":
        return action.payload

      case "search_data":
        return action.payload

      case "blog":
        return action.payload

      case "blog_details":
        return action.payload
  
      default:
        return state;
    }
};

export default globalReducer
