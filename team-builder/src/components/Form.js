import React from 'react';

export default function Form(props) {
    const { formValues, updateForm, updateList } = props;

    const change = e => {
        const { name, value } = e.target;
        // console.log(e.target.name);
        // console.log(e.target.value);
        updateForm( name, value);
    }

    const submit= (e) => {
        e.preventDefault();
        updateList();
    }



    return (
        <form onSubmit={submit}>
            <label> Name
                <input
                    type='text'
                    name='name'
                    placeholder='type a name'
                    value={formValues.name}
                    maxLength='30'
                    onChange={change}
                />
            </label>
            <label> Email
                <input
                    type='email'
                    name='email'
                    placeholder='type an email'
                    value={formValues.email}
                    maxLength='50'
                    onChange={change}
                />
            </label>
            <label> Role
                <select name='role' value={formValues.role} onChange={change}>
                    <option value=''> --Select one-- </option>
                    <option value='Team Leader'> Team Leader </option>
                    <option value='Front end engineer'> Front end engineer </option>
                    <option value='Back end engineer'> Back end engineer </option>
                </select>
            </label>

        <button>Add new team member</button>
      </form>
    )
}