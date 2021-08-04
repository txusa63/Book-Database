import React, { useState } from 'react';
import {Button, Form as RSForm, FormGroup, Input, Label} from 'reactstrap';
import axios from 'axios';

export const Form = ({setData}) => {
    let [ISBN, setISBN] = useState('');
    let [title, setTitle] = useState('');
    let [author, setAuthor] = useState('');
    let searchValue = '';

    const onSubmit = async (e) => {
        e.preventDefault();

        let collection = [];

        if(searchValue === 'ISBN') {
            let results = {};
            if(ISBN !== '') {
                const resData = await axios.get('https://openlibrary.org/isbn/' +  ISBN + '.json');
                if(resData.data) {
                    results.key = resData.data['key']
                    results.isbn = ISBN;
                    let titleVar = resData.data['title'];
                    results.title = titleVar;
                    // const author = await axios.get('https://openlibrary.org/' + resData.data['authors'][0]['key'] + '.json');
                    titleVar = titleVar.replace(/\s/g, '+');
                    const titleRes = await axios.get('https://openlibrary.org/search.json?title=' + titleVar);
                    if(titleRes.data) {
                        const data = titleRes.data['docs'][0];
                        results.author = data['author_name'];
                        results.firstPublishYear = data[['first_publish_year']];
                    }
                    collection.push(results)
                    setData(collection)
                }
            }
            else {
                setData('Nothing Found');
            }
        }

        if(searchValue === 'title') {
            let results = {};
            if(title !== '') {
                title = title.replace(/\s/g, '+');
                const apiRes = await axios.get('https://openlibrary.org/search.json?title=' + title);
                if(apiRes.data) {
                    if(apiRes.data["numFound"] !== 0) {
                        const data = apiRes.data['docs'][0];
                        results.key = data['key']
                        results.isbn = data['isbn'] ? data['isbn'][0] : 'N/A';
                        results.title = data['title'] ? data['title'] : 'N/A';
                        results.author = data['author_name'] ? data['author_name'][0] : 'No Author';
                        results.firstPublishYear = data['first_publish_year'] ? data['first_publish_year']: 'No Publishing Year';
                        collection.push(results);
                        setData(collection);
                    }
                    else {
                        setData('Nothing Found')
                    }
                }
            }
            else {
                setData('Nothing Found');
            }
        }

        if(searchValue === 'author') {
            if(author !== '') {
                author = author.replace(/\s/g, '+');
                const apiRes = await axios.get('https://openlibrary.org/search.json?author=' + author);
                if(apiRes.data) {
                    if(apiRes.data["numFound"] !== 0) {
                        const data = apiRes.data['docs'];
                        for(let i=0; i<data.length; i++) {
                            let results = {};
                            results.key = data[i]['key']
                            results.isbn = data[i]['isbn'] ? data[i]['isbn'][0] : 'N/A'
                            results.title = data[i]['title'];
                            results.author = data[i]['author_name'];
                            results.firstPublishYear = data[i]['first_publish_year']
                            collection.push(results);
                        }
                        setData(collection)
                    }
                    else {
                        setData('Nothing Found');
                    }
                }
            }
            else {
                setData('Nothing Found');
            }
        }
    }

    return (
        <RSForm>
            <FormGroup>
                <Label>
                    <Input type='text'
                           name='ISBN'
                           placeholder='Enter ISBN'
                           value={ISBN}
                           onChange={e => setISBN(e.target.value)}
                    />
                </Label>
                <Button onClick={(e) => {searchValue = 'ISBN';onSubmit(e)}}>Search</Button>
            </FormGroup>
            <FormGroup>
                <Label>
                    <Input type='text' 
                           name='title' 
                           placeholder='Name of Book'
                           value={title}
                           onChange={(e) => setTitle(e.target.value)}
                    />
                </Label>
                <Button onClick={(e) => {searchValue = 'title';onSubmit(e)}}>Search</Button>
            </FormGroup>
            <FormGroup>
                <Label>
                    <Input type='text'
                           name='author'
                           placeholder='Enter name of author'
                           value={author}
                           onChange={e => setAuthor(e.target.value)}
                    />
                </Label>
                <Button onClick={(e) => {searchValue = 'author';onSubmit(e)}}>Search</Button>
            </FormGroup>
        </RSForm>
    )
}

