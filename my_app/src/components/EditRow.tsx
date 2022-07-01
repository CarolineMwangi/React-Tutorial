import React from 'react'

function EditRow({user, editForm, handleEditForm, handleCancelClick}) {
  return (
    <tr>
        <td>
          {user.id}
        </td>
        <td>
        <input 
            type="text"  
            placeholder='Enter a new name...' 
            name='name'
            onChange={handleEditForm}
            value={editForm.name}
            ></input>
        </td>
        <td>
        <input 
            type="text"  
            placeholder='Enter a new username...' 
            name='username'
            onChange={handleEditForm}
            value={editForm.username}
            ></input>
        </td>
        <td><button type='submit'>Save</button></td>
        <td><button onClick={handleCancelClick}>Cancel</button></td>
    </tr>
  )
}

export default React.memo(EditRow);