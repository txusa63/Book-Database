import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert, Button, ButtonGroup } from 'reactstrap';

export const Favorites = () => {
    const [dbData, setDBData] = useState(undefined);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setVisible(false);
        }, 3000);

        return () => clearTimeout(timeout);
    }, [visible])

    const onDismiss = () => setVisible(!visible);

    useEffect(() => {
        fetchFromDB();
    }, []);

    const fetchFromDB = async () => {
        const dbResponse = await axios.get('/books/');
        if(dbResponse.data) {
            setDBData(dbResponse.data);
        }
    }

    const openPage = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    };

    const deleteBook = async (id) => {
        try {
            await axios.delete('/books/delete/' + id);
            fetchFromDB()
            onDismiss();
        } 
        catch (err) {
            console.error(err)
        }
    }

    const mapData = () => {
        return dbData.map(el => {
            return (
                <li key={el._id}>
                    <ButtonGroup>
                        <Button outline color='secondary' size='sm' onClick={() => openPage('https://openlibrary.org' + el.key)}>
                            {el.title}
                        </Button>
                        <Button color='danger' size='sm' onClick={() => deleteBook(el._id)} >X</Button>
                    </ButtonGroup>
                </li>
            )
        })
    }

    return (
        <div>
            <h3>Favorite Books:</h3>
            {<Alert color='danger' isOpen={visible} toggle={onDismiss} >Book Deleted</Alert>}
            {dbData !== undefined ? (<ul style={{listStyleType: "none"}}>{mapData()}</ul>) : null}
        </div>
    )
}
