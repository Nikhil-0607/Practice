import React, {useState} from 'react'

const TaskOne = () => {
  const [loginStatus, setLoginStatus]= useState(false);
  const [count, setCount] = useState(0);
  
  const countPlus=()=>{
    setCount(count+1);
    console.log(count);
  }
  const countDecrese=()=>{
    setCount(count-1);
    console.log(count);
  }
  const countDouble=()=>{
    setCount(count+2);
    console.log(count);
  }

  const signIn=()=>{
    setLoginStatus(true);
    console.log(loginStatus);
  }
  const signOut=()=>{
    setLoginStatus(false);
    console.log(loginStatus);

  }
  return (
    <div>
      <h1>
        Task One
      </h1>
      <p>Login status {loginStatus}</p>
      {loginStatus ? (<button onClick={signOut}>Sign Out </button>) : (<button onClick={signIn}>Sign In </button>)}
      {/* <button onClick={signIn}>signIn</button>
      <button onClick={signOut}>signOut</button> */}

      <h2>Counter</h2>
      <p>Count : {count}</p>
      <button onClick={countPlus} >increase</button>
      <button onClick={countDecrese} >decrese</button>
      <button onClick={countDouble} >count double</button>


    </div>
  )
}

export default TaskOne