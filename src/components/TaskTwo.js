
import React, {useState} from 'react'

const TaskTwo = () => {
  
  const [email, setEmail] = useState("");
  const [name, setName] = useState("")
  const [mobile, setMobile] = useState("");



  const submitData=(e)=>{
    e.preventDefault();
    console.log(email)
    console.log(name)
    console.log(mobile)

  }

  
  return (
    <div>
      <h1>
        Task Two
      </h1>
      {/* <p>Email : {email}</p> */}
      <form onSubmit={submitData}>
          <input type='text' onChange={(e)=>{setEmail(e.target.value)} } placeholder='Enter E-mail' value={email} required></input>
          

          <input type='text' onChange={(e)=>{setName(e.target.value)} } placeholder='Enter name' value={name} required></input>
          

          <input type='text' onChange={(e)=>{setMobile(e.target.value)} } placeholder='Enter mobile' value={mobile} required></input>
          
          <button type="submit">Click Here</button>
      </form>


    </div>
  )
}

export default TaskTwo