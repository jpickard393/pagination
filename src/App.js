
import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import Table from "./Components/Table/Table";
import './App.css'

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchToDoData = async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
      setData(response.data);
    };

    fetchToDoData();
  }, []);

  // const columns = [
  // {
  //   Header: "User",
  //   accessor: "userId",
  // },
  // {
  //   Header: "Id",
  //   accessor: "id",
  // },
  // {
  //   Header: "Title",
  //   accessor: "title",
  // },
  // {
  //   Header: "Completed",
  //   accessor: "completed",
  // }];

  const columns = useMemo(
    () => [
      {
        Header: "User",
        accessor: "userId",
      },
      {
        Header: "Id",
        accessor: "id",
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
      <Table columns={columns} data={data} />
    </div>
  );
};

export default App;
