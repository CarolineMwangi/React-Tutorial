import React from 'react'
import ReadOnly from './ReadOnly';
import EditRow from './EditRow';

function Users({ users,  
    editUsers, 
    handleCancelClick, 
    handleEditClick, 
    handleEditForm, 
    handleEditSave, 
    editForm}) {
  return (
    <form onSubmit={handleEditSave}>
    <table>
        <thead>
            <tr>
                <th>
                    id
                </th>
                <th>
                    name
                </th>
                <th>
                    username
                </th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {users.map(user =>
                <>
                {editUsers === user.id ? (
                <EditRow 
                    user={user}
                    editForm={editForm} 
                    handleEditForm={handleEditForm}
                    handleCancelClick={handleCancelClick} />
                ) : (
                <ReadOnly 
                    user={user} 
                    handleEditClick={handleEditClick}
 
                    />

                )}   
                </>)}
        </tbody>
    </table>
    </form>
  )
}

export default React.memo(Users);
