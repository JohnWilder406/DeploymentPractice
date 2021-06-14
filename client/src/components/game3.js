import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {Button, Table, Card, Row} from 'react-bootstrap';
import {Link} from '@reach/router'

const Game3 = () => {
    const [players, setPlayers] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:8000/api/players')
            .then(res=>{
                setPlayers(res.data);
            })
    })

    const statusChange = (id, status) => {
        axios.put("http://localhost:8000/api/players/" + id, {status3: status})
            .then(res=> console.log(res));   
    }

    return (
        <Card body border="dark" style={{width: '800px', margin: '20px'}}>
            <h1>Player Status- Game 3</h1>
            <Row className="tableheader">
                <Link className="headerlink" to="../1">Game 1</Link> |
                <Link className="headerlink" to="../2">Game 2</Link> |
                <Link className="headerlink" to="../3">Game 3</Link>
            </Row>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        players.map((info, index) => {
                            return(<tr key={index}><td>{info.name}</td><td><Button style={{marginLeft: '30px', marginRight: '30px', width: '150px'}} variant={info.status3 === 'playing' ? 'success' : 'secondary'} onClick={(e)=>statusChange(info._id, 'playing')}>Playing</Button><Button style={{marginLeft: '10px', marginRight: '30px', width: '150px'}} variant={info.status3 === 'not playing' ? 'danger' : 'secondary'} onClick={(e)=>statusChange(info._id, 'not playing')}> Not Playing</Button>
                                <Button style={{marginLeft: '10px', marginRight: '30px', width: '150px'}} variant={info.status3 === 'undecided' ? 'warning' : 'secondary'}  onClick={(e)=>statusChange(info._id, 'undecided')}>Undecided</Button></td></tr>)
                        })
                    }
                </tbody> 
            </Table>
        </Card>
    )
}

export default Game3;