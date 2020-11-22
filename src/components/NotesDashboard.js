import React from 'react'
import { connect } from "react-redux";
import SingleNote from "./SingleNote"

function NotesDashboard(props) {
  return (
    <div className="notes-container">
    {props.notesDetails.length!==0 ?props.notesDetails.map((note)=>(<SingleNote key = {note.id} {...note}/>)):<h5>ADD A NOTE</h5>}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notesDetails: state,
  };
};

export default connect(mapStateToProps)(NotesDashboard)