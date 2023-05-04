
import React, { useEffect, useState } from "react";
import {FixedSizeList as List} from "react-window";
import Row from "./Components/row";
import './App.css'

const App = () => {
  const [data, setData] = useState([]);
  const maxRows = 10000;

  const generateData = () =>{
    const newTasks = [];
    for(let i = 0; i <maxRows; i++){
      const newTask = {
        id:i,
        userId:'User ' + i,
        title: 'Task Item ' + i,
        completed:false
      }
      newTasks.push(newTask);
    }

    setData(newTasks);
  }

  const reverse = () => {
    setData((data) => data.slice().reverse());
  };
  
  useEffect(() => {
    generateData();
  }, []);
  
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <div className="buttonContainer">
      <button onClick={reverse}>Reverse</button>
      </div>
        <List innerElementType="ul"
        useIsScrolling={true}
        itemCount={data.length}
        itemSize={25}
        height={500}
        width={1000}>
          {({index, style }) => {
          return (
            <li style={style}>
              <Row item={data[index]}></Row>
            </li>
          );
        }}
        </List>
    </div>
  );
};

export default App;
