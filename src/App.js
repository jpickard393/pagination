
import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import Table from "./Components/Table/Table";
import './App.css'

const App = () => {
  const [data, setData] = useState([]);
  const myAPIPath = "https://localhost:7177/ToDo";
  //const myAPIPath = "https://jsonplaceholder.typicode.com/todos";

  const fetchToDoData = async () => {
    await axios.get(myAPIPath).then(result =>
    {
       setData(result.data);      
    }).catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    console.log("useEffect");
    fetchToDoData();
  }, []);

  // useMemo stops header being re rendered every time.
  // access or is the field name of teh record
  const columnNames = useMemo(
    () => [
      {
        Header: "Id",
        accessor: "id",
      },
      {
        Header: "User",
        accessor: "userId",
      },
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Completed",
        accessor: "completed",
      },
    ],
    []
  );

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <Table columns={columnNames} data={data} />
    </div>
  );
};

export default App;
