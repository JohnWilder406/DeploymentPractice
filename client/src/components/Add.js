import React, { useState } from 'react';
import axios from 'axios'
import {navigate} from '@reach/router';
import {Button, Form, Row, Card} from 'react-bootstrap'


const Add = () => {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [players, setPlayers] = useState([]);
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/players', {
            name,
            position,
        })
        .then(res=>{
            setPlayers([...players, res.data]);
        })
        navigate(`/players/list`)
    }


    return (
        <Card body border="dark" style={{width: '800px', margin: '20px'}}>
            <Row>
                <h2>Add Player</h2>
            </Row>
            <Form onSubmit={onSubmitHandler}>
                <Form.Group>
                <Form.Label>Player Name:</Form.Label>
                <Form.Control
                    type="text"
                    name="player"
                    placeholder="Player's Name- must be 3 characters"
                    onChange={(e)=>setName(e.target.value)} />
                </Form.Group>
                <Form.Group>
                <Form.Label>Preferred Position:</Form.Label>
                <Form.Control
                    type="text"
                    name="position"
                    placeholder="Preferred position (optional)"
                    onChange={(e)=>setPosition(e.target.value)} />
                </Form.Group>
                {
                    name.length > 2 ? <Button variant="success" type="submit">Add Player</Button> : <Button variant="success" type="submit" disabled>Add Player</Button> 
                }
                
            </Form>
        </Card>
    )
}

export default Add;