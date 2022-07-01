import React from 'react'
import { useNavigate } from 'react-router';

function ReadOnly({user, handleEditClick}) {
  
  const navigate = useNavigate();
  
  return (
    <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td><button onClick={(event)=> handleEditClick(event, user)}>Edit</button></td>
        <td><button onClick={() => navigate(`/albums?userId=${user.id}`)}>Fetch Albums</button></td>
    </tr>

  )
}

export default React.memo(ReadOnly);