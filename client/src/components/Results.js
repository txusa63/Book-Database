import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Alert, Button, ButtonGroup } from 'reactstrap'

export const Results = ({data}) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setVisible(false);
        }, 3000);

        return () => clearTimeout(timeout);
    }, [visible])

    const onDismiss = () => setVisible(!visible);

    const mapData = () => {
        return data.map(el => {
            return (
                <li key={el.key}>
                    <ButtonGroup>
                        <Button outline color='secondary' size='sm' onClick={() => openPage('https://openlibrary.org' + el.key)}>
                            {el.title}
                        </Button>
                        <Button color='success' size='sm' onClick={() => saveBook(el.key, el.isbn, el.title, el.author, el.firstPublishYear)} >Save to Favorites</Button>
                    </ButtonGroup>
                </li>
            )
        })
    }

    const openPage = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    const saveBook = async (key, ISBN, title, author, firstPublishYear) => {
        try {
            const bookData = {key, ISBN, title, author: Array.isArray(author) ? author[0] : author, firstPublishYear: String(firstPublishYear)};
            await axios.post('/books/add', bookData);
            onDismiss();
        } 

        catch (err) {
            console.error(err);
        }
    }
    
    return (
        <div>
            <h3>Results: </h3>
            {<Alert color='success' isOpen={visible} toggle={onDismiss} >Book Saved</Alert>}
            {Array.isArray(data) ? (<ul style={{listStyleType: "none"}}>{mapData()}</ul>) : <Alert color='dark'>{data}</Alert>}
        </div>
    )
}
