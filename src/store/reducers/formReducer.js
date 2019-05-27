//reducer are created to change the routing after successful form submission or failed one.

const initState = {
  success: false
};

const formReducer = (state = initState, action) => {
  switch(action.type){
    case 'INITIALIZE_FORM_ROUTE':
      return{
        ...state,
        success: false
      };
    case 'FORM_SUCCESS_ROUTE':
      return{
        ...state,
        success: true
      };
    default:
      return state;
  }
};

export default formReducer;