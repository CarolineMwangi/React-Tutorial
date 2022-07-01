import React, {FunctionComponent, useEffect, useState} from 'react';
import { useNavigate } from 'react-router';
import axios from "axios";
import Users from './Users';
import LoadSpinner from './LoadSpinner';

type User = {
    id: string,
    name: string,
    username: string
}

const UsersTable: FunctionComponent = () => {

    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(false);
 

    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/users";
        setIsLoading(true);
        axios.get(url)
            .then(response => setUsers(response.data));
            setIsLoading(false);
    }, []);

    const [editForm, setEditForm] = useState({
        id: "",
        name: "",
        username: ""
    })



    const [editUsers, setEditUsers] = useState(null);

    const handleEditForm = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newData = { ...editForm};
        newData[fieldName] = fieldValue;

        setEditForm(newData);
    }

    const handleEditClick = (event, user) => {
        event.preventDefault();
        setEditUsers(user.id);

        const formValues = {
            id: user.id,
            name: user.name,
            username: user.username,
        };

        setEditForm(formValues);
    }


    const handleEditSave = (event) => {
        event.preventDefault();

        const editedData = {
            id: editForm.id,
            name: editForm.name,
            username: editForm.username
        };

        const newDetails = [...users];

        const index = users.findIndex((user) => user.id === editUsers);

        newDetails[index] = editedData;
        setUsers(newDetails);
        setEditUsers(null);
    }

    const handleCancelClick = () => {
        setEditUsers(null);
    }

    const navigate = useNavigate();

    return (
        <>
        {isLoading ? <LoadSpinner /> : <Users 
                users={users}
                editUsers={editUsers}
                handleCancelClick={handleCancelClick}
                handleEditClick={handleEditClick}
                handleEditForm={handleEditForm}
                handleEditSave={handleEditSave}
                editForm={editForm}
                />}
        <br></br>
        <button className='btn' onClick={() => navigate("/")}>
            Back To Home
        </button>
        </>
    )
   
}

export default React.memo(UsersTable);
