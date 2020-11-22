import React from "react";
import createNewStore from "./store/redux_config";
import NotesDashboard from "./components/NotesDashboard";
import { Provider } from "react-redux";
import AddNote from "./components/AddNote";
import Header from "./components/Header";
import Container from '@material-ui/core/Container';
import {Switch,Route} from "react-router-dom"
import EditNote from "./components/EditNote";


const store = createNewStore();
function setToLocalstorage(state) {
  const json = JSON.stringify(state)
  localStorage.setItem('notesDetails',json)
 }
store.subscribe(() =>setToLocalstorage(store.getState()));


function App() {
  return (
    <Provider store={store}>
    <Header/>
    <Switch>
        <Route path="/" component={AddNote} exact />
        <Route path="/edit/:id" component={EditNote}/> 

    </Switch>
    <Container >
    <NotesDashboard />
    </Container>    
    </Provider>
  );
}

export default App;
