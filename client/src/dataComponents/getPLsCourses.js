import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';

export default function RestApiHooksComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {  axios.get("courses/programminglanguages").then( result => setData( result.data ) ); }, [] );

  return (
    <div>
      <tr>
        
          {data.map(item => (
            <td style={{ padding: 20}}>
              <div key={item._id}>
                <Button variant="dark" ><h1>{item.title}</h1></Button>
              </div>
            </td> ) ) }
        
      </tr>
    </div>
  );
}
