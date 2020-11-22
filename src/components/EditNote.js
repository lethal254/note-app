import React, { Component } from 'react'
import {AddNotes} from "../actions/actions"
import {connect} from "react-redux"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



class EditNote extends Component {
  state = {
    description:"",
    note:""
  }
handleDescriptionChange =(e)=>{
  const description = e.target.value
  this.setState(()=>({description}))
}
handleNoteChange =(e)=>{
  const note = e.target.value
  if(note.length>400){
    alert("OOPS! We currently support short notes of up to 400 words")
  }else{
    this.setState(()=>({note}))
  }
}

  render() {
    return (
      <div>
      <form 
      className="addnote-form"
      onSubmit={(e)=>{
        e.preventDefault()
        const {description, note} = this.state
        if(description && note){
          this.props.dispatch(AddNotes({description:description, note:note}))
          this.setState(()=>({
            description:"",
            note:""
          }))
          
        }else{
          alert("Title and Note fields are required")
        }

      }}>
        <TextField  className="addnote-form-title" id="outlined-basic" label="Title" variant="outlined" placeholder="Title" name="title" type="text" value={this.state.description} onChange={this.handleDescriptionChange} autoFocus></TextField>
        <TextField
            className="addnote-form-note"
            id="outlined-multiline-flexible"
            label="Add Note"
            multiline
            rowsMax={4}
            variant="outlined"
            placeholder="Type your note here" name="note" value={this.state.note} onChange={this.handleNoteChange}>
        </TextField>

        
        <Button 
            class-name="addnote-form-button"
            variant="outlined" 
            color="primary" 
            type="submit"
            size="large"        >
            Save
        </Button>
      </form>
    </div>
    )
  }
}


export default connect()(EditNote);

