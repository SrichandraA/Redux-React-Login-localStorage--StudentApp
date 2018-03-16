const initialState = {
  articles: [],
  students:[]
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ARTICLE":
      return { ...state, articles: [...state.articles, action.payload] };
      case "ADD_STUDENT":
      return { ...state, students: [...state.students, action.payload] };
      case "EDIT_STUDENT":
      return Object.assign({}, state, {
        students: state.students.map(item => {
            return item.id === action.payload.id ? action.payload : item;
        }) 
      });
      case "DELETE_STUDENT":
      return Object.assign({}, state, {
        students: state.students.filter(item => {
            return item.id !== action.payload; //delete matched students
        })
     }); 
    default:
      return state;
  }
};
export default rootReducer;