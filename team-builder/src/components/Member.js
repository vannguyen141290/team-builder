import React from 'react';


export default function Member(props) {
    const { member } = props;
    return (
        <div className='member-container'>
            <h4>Name: {member.name}</h4>
            <p>Email: {member.email}</p>
            <p>Role: {member.role}</p>
            <button>Edit</button>
        </div>
    )

}