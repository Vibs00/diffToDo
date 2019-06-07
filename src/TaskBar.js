import React from 'react';

//import material
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


class TaskBar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
        <div>
            <AppBar color="secondary" position="sticky">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                    Good Evening, Vibha!
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
        );
    }
}

export default TaskBar;