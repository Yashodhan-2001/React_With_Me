
import './App.css';
import User from'./User';
import UserClass from './UserClass';
import Event from './Event';
import{useState} from'react'
import FunctionState from './FunctionState'
import StudentProps from'./StudentProps'
import StudentPropsState from'./StudentPropsState'

function App() {
  const[name,setName]=useState("Yash")
 return (
    <div className="App">
    
      <User/>
      <UserClass/>
       <Event></Event>
       <FunctionState/>
       <StudentProps name={"Yashodhan"} email="yashodhan2122001@gmail.com"/>
       <StudentPropsState name={name}/>
       <button onClick={()=>{setName("Yashodhan")}}>Update ME</button>
     
    </div>
  );
}

export default App;
