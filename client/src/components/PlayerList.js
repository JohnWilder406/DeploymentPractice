import React from 'react';
import DeleteButton from './DeleteButton';
import {Table} from 'react-bootstrap';

const PlayerList = (props) => {
    const {removeFromDom, players} = props;

    return (
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Preferred Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                    players.map((info, index) => {
                        return(<tr key={index}><td>{info.name}</td><td>{info.position}</td> <DeleteButton player={info.name} id={info._id} successCallback={(e)=>removeFromDom(info._id)}/></tr>)
                    })
                } 
                </tbody>
            </Table>
    )
}

export default PlayerList;