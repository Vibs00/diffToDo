import React from 'react';

//import js
import MyList from './TaskAdd';
import TaskBar from './TaskBar.js'
import Section2 from './Card.js'


// import logo from './logo.svg';

//import material
import Typography from '@material-ui/core/Typography';



//import css
import './App.css';
import './paper.css'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


class ToDo extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
    this.state.list = [];
    this.state.i = {name: ""};

  }

  getValue = (event) =>{
    let l = this.state.i;
    l.name = event.target.value;
    this.setState({
        i : l
    })
  }

  setValue = () =>{
    let l = this.state.list;
    l.push(this.state.i);
    this.setState({
        list : l,
        i: {name: ""}
    })
  }

  printValue = () =>{
    let arr = this.state.list.map((value)=>
        <MyList value={value}></MyList>
      );
      return arr;
  }


  render(){
    return(
      <div>
        <TaskBar></TaskBar>
        <div className="row">
          <div className="col md-4">
        <div className="A">
        <div className="card">
          <Typography gutterBottom variant="h5" component="h2">
            ToDo Add
          </Typography>
          <Typography component="p">
            {this.printValue()}
          </Typography>
          <div className="card">
            <input type="text" onChange={this.getValue}></input>
            <button onClick={()=>this.setValue()}>ADD</button>
          </div>
        </div>
        </div>
        </div>
        <Section2>

        </Section2>
        </div>
      </div>
    );
  }
}


export default ToDo;