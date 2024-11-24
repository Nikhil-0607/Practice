import React, { useState } from "react";

const TaskTwo = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [st, setSt] = useState("");
  const [msg, setMsg] = useState("");
  const [gender, setGender] = useState("");
  const [aadhar, setAadhar] = useState("");

  const submitData = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(name);
    console.log(mobile);
    console.log(st);
    console.log(msg);
    console.log(gender);
    console.log(aadhar);

  };

  return (
    <div>
      <h1>Task Two</h1>
      {/* <p>Email : {email}</p> */}
      <form onSubmit={submitData}>
        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter E-mail"
          value={email}
          required
        ></input>

        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Enter name"
          value={name}
          required
        ></input>

        <input
          type="text"
          onChange={(e) => {
            setMobile(e.target.value);
          }}
          placeholder="Enter mobile"
          value={mobile}
          required
        ></input>

        <select onChange={(e)=>{setSt(e.target.value)}}>
          <option value="JH">Jharkhand</option>
          <option value="OD">Odisa</option>
          <option value="BH">Bihar</option>
        </select>

        <textarea onChange={(e)=>{setMsg(e.target.value)}}>

        </textarea>

        <label>Gender</label>
        <input type="radio" onChange={(e)=>{setGender(e.target.value)}} value='Male' checked={gender==="Male"}/>Male
        <input type="radio" onChange={(e)=>{setGender(e.target.value)}} value="Female" checked={gender==="Female"}/>Female

        <label>Id</label>
        <input type="checkbox" onChange={(e)=>{setAadhar(!aadhar)}} checked={aadhar===true}/>Aadhar


        <button type="submit">Click Here</button>
      </form>
    </div>
  );
};

export default TaskTwo;
