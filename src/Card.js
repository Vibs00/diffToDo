import React from "react";
import './App.css';
import './paper.css'


import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemSecondatyAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'



// class Section1 extends React.Component {
//     constructor(props){
//         super(props);
//     }
//     render(){
//     return (
//         // <div className="Car">
//         //     <Grid container spacing={40} justify="center">
//         //         <Grid>
//         //             <Card>
//         //             <CardActionArea>
//         //                 <CardMedia/>
//         //                 <CardContent>
//         //                 <Typography gutterBottom variant="h5" component="h2">
//         //                     ToDo Add
//         //                 </Typography>
//         //                 <Typography component="p">
//         //                 {/* <ListItem>
//         //                     <ListItemText primary="Spam" />
//         //                 </ListItem> */}
//         //                 {this.props.printValue()}
//         //                 </Typography>
//         //                 <Typography component="p">
//         //                 </Typography>
//         //                 </CardContent>
//         //             </CardActionArea>
//         //             </Card>
                    
//         //         </Grid>
//         //     </Grid>
//         // </div>
//     );
//     }
// }


class Section2 extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
    return (
        <div className="A">
            <Grid container spacing={40} justify="center">
                <Grid>
                <Card className="Car">
                    <CardActionArea>
                        <CardMedia/>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Done
                        </Typography>
                        <Typography component="p"></Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                    <Card>
                    <CardActionArea>
                        <CardMedia/>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Pined
                        </Typography>
                        <Typography component="p"></Typography>
                        </CardContent>
                    </CardActionArea>
                    {/* <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions> */}
                    </Card>                    
                </Grid>
            </Grid>
        </div>
    );
    }
}


export default Section2;