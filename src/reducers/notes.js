const setState = ()=>{
  if(localStorage.getItem("notesDetails")){
    const string = localStorage.getItem("notesDetails")
    const myState = JSON.parse(string)
    return myState
  }else{
    return []
  }
}



const notesReducer = (state = setState(), action) => {
  switch (action.type) {
    case "ADD_NOTES":
      return [...state, action.note];
    case "REMOVE_NOTE":
      return state.filter(({id}) => id !== action.id);

    case "EDIT_NOTES":
      const theNote = state.find((note)=>note.id===action.id)
      return ({...theNote,
              ...action.changes
      })
    default:
      return state;
  }
};
export default notesReducer;
