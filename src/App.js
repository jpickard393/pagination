
import React, { useEffect, useState } from "react";
import {FixedSizeList as List} from "react-window";
import './App.css'

const App = () => {
  const [data, setData] = useState([]);

  const generateData = () =>{
    const newTasks = [];
    for(let i = 0; i <10000; i++){
      const newTask = {
        id:i,
        userId:'userId' + i,
        title: 'Item ' + i,
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
        itemCount={data.length}
        itemSize={20}
        height={700}
        width={400}>
          {({index, style }) => {
          return (
            <li style={style}>
              <span className="column">{data[index].id}</span>
              <span className="column">{data[index].userId}</span>
              <span className="column">{data[index].title}</span>
              <span className="column">{data[index].complete ? "Yes" : "No"}</span>
            </li>
          );
        }}
        </List>
    </div>
  );
};

export default App;
