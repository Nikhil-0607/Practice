import React from 'react'

const NewFile = () => {
    var data = {
        name: "Parmeshwar",
        roll: 10,
        Address: "dhanbad",
    };
  return (
    <div>
        <p>my name is {data.name}</p>
        <p>my roll number is {data.roll}</p>
        <p>my adress is {data.Address}</p>
    </div>
  );
};

export default NewFile;