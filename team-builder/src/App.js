
import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import Member from './components/Member';


const initialFormValues = {
  name: '',
  email: '',
  role: ''
}


function App() {
  const [ members, setMembers ] = useState([]);
  const [ formValues, setFormValues ] = useState(initialFormValues);
  const [ err, setErr ] = useState('');

  const updateForm = (inputName, inputvalue) => {
    setFormValues({...formValues, [inputName]: inputvalue})
  }

  const updateList = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    if (!newMember.name || !newMember.email || !newMember.role ) {
      setErr('please fill the form');
      return;
    }

    setMembers([...members, newMember]);
    setFormValues(initialFormValues);
    setErr('')
  }

  //prevent users from not input anything in the input box



  return (
    <div className="App">
      <Form formValues={formValues} updateForm={updateForm} updateList={updateList} />
      <h3>{err}</h3>
      {members.map((member, idx) => {
        return (
          <Member key={idx} member={member} />
        )})
      }
    </div>
  );
}

export default App;
