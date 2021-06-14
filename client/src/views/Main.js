import React, { useState, useEffect } from 'react';
import axios from 'axios'
import PlayerList from '../components/PlayerList';
import {Link} from '@reach/router';
import {Card, Row} from 'react-bootstrap';

const Main = () => {
    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=> {
        axios.get('http://localhost:8000/api/players')
            .then(res=>{
                setPlayers(res.data);
                setLoaded(true);
            })
    });

    const removeFromDom = playerId => {
        setPlayers(players.filter(player => player._id !== playerId))
    }


    return (
        <Card body border="dark" style={{width: '800px', margin: '20px'}}>
            <Row className="tableheader">
                <Link to="/players/list" className="headerlink">List</Link> |
                <Link to="/players/addplayer" className="headerlink" >Add Player</Link> <br/>
            </Row>
            {loaded && <PlayerList players={players} removeFromDom={removeFromDom} /> }
        </Card>
    )
}

export default Main;
