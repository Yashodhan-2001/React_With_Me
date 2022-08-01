import{useState} from'react'
function FunctionState()
{
const[data,setDate]=useState(0)
function Updateno()
{
    setDate(data+1)
}   
return(
    <div>
        <h1>{data}</h1>
        <button onClick={Updateno}>Update Me</button>
    </div>
)
}
export default FunctionState;


