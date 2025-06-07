import React, { useState } from 'react';

function InfoForm() {
  /* arrays for each field set their current state*/
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [program, setProgram] = useState('');


/* what heppens when u click submit*/
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    alert(`Name: ${name}\nAge: ${age}\nProgram: ${program}`);
  };

  return (
    <div className="infoForm"> 
    {/* made a form to collet info easier*/}
    <form onSubmit={handleSubmit}>
      <p>
        Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </p>
      <p>
        Age: <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </p>
      <p>
        College Program: <input type="text" value={program} onChange={(e) => setProgram(e.target.value)} />
      </p>
      <div id="submitBtn">
      <button type="submit">Submit</button>
      </div>
    </form>
    </div>
  );
}

export default InfoForm;
