import React, { useEffect, useState } from "react";
import axios from "axios";

export default function RestApiHooksComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("courses/programminglanguages").then( result => setData( result.data ) );
              }, []);

  return (
    <div>
        {data.map(item => (
          <div key={item._id}>
            <h1>{item.title}</h1>
            <p>{item.description}</p> 
          </div>
        ))}
    </div>
  );
}