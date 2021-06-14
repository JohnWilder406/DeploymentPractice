import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

const DeleteButton = (props) => {
    const { player, id, successCallback} = props;
    const deletePlayer = (e) => {
        let result = window.confirm(`Are you sure you want to remove ${player}`)
        result ? axios.delete('http://localhost:8000/api/players/' + id)
            .then(res=>{
                successCallback();
            }) : alert(`You cancelled the delete player function`)
    }

    return (
        <Button variant="danger" onClick={deletePlayer}>
            Delete
        </Button>
    )
}

export default DeleteButton;