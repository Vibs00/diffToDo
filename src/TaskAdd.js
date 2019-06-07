import React from 'react';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemSecondatyAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";



class MyList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Card>
                <CardActionArea>
                  <CardMedia height="140"/>
                  <CardContent>
                    <ListItem>
                        <ListItemText>{this.props.value.name}</ListItemText>
                    </ListItem>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}

export default MyList;