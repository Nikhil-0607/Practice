import React, {useState} from "react";

const TaskThree = () => {
  const [formData, setFromData] = useState({
    email: "",
    name: "",
    mobile: "",
    gender: "",
    state: "",
    aadhar: "false",
  });

  const submitData = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFromData((formData) => ({ ...formData, [name]: value }));
  };
  return (
    <div>
      <h1>TaskThree</h1>

      <form onSubmit={submitData}>
        <input
          type="text"
          name="email"
          onChange={handleChange
          }
          placeholder="Enter E-mail"
          value={formData.email}
          required
        ></input>
        <input
          type="text"
          name="name"
          onChange={
            handleChange
          }
          placeholder="Enter name"
          value={formData.name}
          required
        ></input>
        <input
          type="text"
          name="mobile"
          onChange={
            handleChange
          }
          placeholder="Enter mobile"
          value={formData.mobile}
          required
        ></input>
        <select
        name="state"
          onChange={
            handleChange
          }
        >
          <option value="JH">Jharkhand</option>
          <option value="OD">Odisa</option>
          <option value="BH">Bihar</option>
        </select>
        <textarea
        name="msg"
          onChange={
            handleChange
          }
        ></textarea>
        <label>Gender</label>
        <input
          type="radio"
          name="gender"
          onChange={
            handleChange
          }
          value="Male"
          checked={formData.gender === "Male"}
        />
        Male
        <input
          type="radio"
          name="gender"
          onChange={
            handleChange
          }
          value="Female"
          checked={formData.gender === "Female"}
        />
        Female
        {/* <label>Id</label>
        <input
          type="checkbox"
          name="aadhar"
          onChange={
            setFromData.aadhar(!formData.aadhar)
          }
          checked={formData.aadhar === true}
        />
        Aadhar */}
        <button type="submit">Click Here</button>
      </form>
    </div>
  );
};

export default TaskThree;
