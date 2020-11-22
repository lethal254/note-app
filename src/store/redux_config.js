import { createStore } from "redux";
import notesReducer from "../reducers/notes";

const store = createStore(notesReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const createNewStore = () => store;
export default createNewStore;
