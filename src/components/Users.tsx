import React, { useState, useEffect } from 'react'

function Users() {
    const [ users, setUsers ] = useState([]);
    
    // useEffect(async () => {
    //     const response = (await fetch('https://random-data-api.com/api/v2/users?size=10')).json();
    // }, [])
    
  return (
    <div style={{ width: '600' }}>
        Users
    </div>
  )
}

export default Users