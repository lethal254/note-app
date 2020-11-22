import React from "react";
import { connect } from "react-redux";
import {RemoveNotes} from "../actions/actions"
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom"

const SingleNote = ({description, id, note, dispatch}) => (
  <div className="my-note">
      <Card className="card">
      <CardContent>
      <Link to ="/edit">
      <Typography variant="h3"  gutterBottom >
      {description}
    </Typography>
      </Link> 
        
        <Typography variant="body2" >
          {note}
        </Typography>
      </CardContent>
      <CardActions>
          <Button onClick={()=>{
            dispatch(RemoveNotes(id))
          }} 
          variant="outlined" 
          color="primary"
          >Remove</Button>


      </CardActions>
    </Card>
  </div>
);



export default connect()(SingleNote);
