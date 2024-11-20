import React from 'react';

const Jsr = () => {
    var name = "Parmeshwar Kumar Mahato";
    var fatherName = "Manpuran Mahato";
    var rollNo = "10";
    var education = "B-tech";
    // varislogin = true;
    var college = " Dumka Engineering College";
    var friends =[ "param","nikhil","saurav", "vivek", "avinash"];
    const fruits = ["banana", "Orange", "apple","Mango"]
   


  return (
    <div>
        <p>my name is {name}</p>
        <p>my father name is {fatherName}</p>
        <p>my roll no. is {rollNo}</p>
        <p>my qualification is {education}</p>
        <p>my college name is {college}</p>
        <p>my friends nsme is {friends}</p>
        <p>number of friends {friends.length}</p>
        <p>mane of fruits {fruits}</p>


          <table border={"1px"}>
            <tr>
              <th>Name</th>
            </tr>
            
          {friends.map((data) => (
            <tr>
              <th>{data}</th>

            </tr>
 ))}
          
          </table>
    </div>
  );
};

export default Jsr;