export const addArticle = article => ({ type: "ADD_ARTICLE", payload: article });
export const addStudent = student => ({ type: "ADD_STUDENT", payload: student });
export const editStudent = student => ({ type: "EDIT_STUDENT", payload: student });
export const deleteStudent = student => ({ type: "DELETE_STUDENT", payload: student });