import React, { useState, useEffect } from "react";
import "./Httpreq.css";

function Httpreq() {
  const [data, setData] = useState("Data");
  const [message, setMessage] = useState("Fetching Data");
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchapi = async () => {
      const URL = `http://dummy.restapiexample.com/api/v1/employees`;
      const response = await fetch(URL);
      const response_json = await response.json();
      console.log(response_json.data);
      setData(response_json.data);
      console.log(data);
      setMessage(response_json.message);
    };

    fetchapi();
  }, []);
  function handleChange(event) {
    setSearch(event.target.value);
  }

  const searchitem = () => {
    console.log("Searching....");
  };
  const sorting = () => {
    console.log("Sorting....");
  };

  return (
    <div className="data">
      <h1>{message}</h1>
      {/* <h1>{data}</h1> */}

      <input type="text" value={search} onChange={handleChange} />
      <button onClick={searchitem}>Search</button>
      <button onClick={sorting}>Sort</button>
      <hr></hr>

      <hr></hr>
      <h1>Employee List</h1>
      {/* {data.map((name) => (
        <ol key={name.id}>
          <h3>Name:{name.employee_name}</h3>
          <sub>
            Age:{name.employee_age} Salary:{name.employee_salary}
          </sub>
        </ol>
      ))} */}

      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Salary</th>
        </tr>
        {data.map((name) => (
          <tr key={name.id}>
            <td>{name.employee_name}</td>
            <td>{name.employee_age}</td>
            <td>{name.employee_salary}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Httpreq;
