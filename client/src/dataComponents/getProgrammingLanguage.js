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

/*
class PL extends Component {

  state = {
    PLs: []
  }

  componentDidMount(){
    this.getPLs();
  }

  getPLs = () => {
    axios.get('courses/programminglanguages')
      .then(res => {
        if(res.data){
          this.setState({
            PLs: res.data
          })
        }
      })
      .catch(err => console.log(err))
  }

  

  render() {
    
    const PLs = this.state.PLs.map(PL => (
      <div key={PL._id}>
        <h1>{PL.title}</h1>
        <p>{PL.description}</p>
      </div>
    
      //<ListPL PLs={PLs} />
    ));
    
    return {

    }
  }
}

export default PL;
*/