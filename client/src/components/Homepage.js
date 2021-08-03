import React, { useState } from "react";
import {Form} from "./Form";
import { Results } from "./Results";

export const Homepage = () => {
    const [data, setData] = useState(undefined);

    return (
        <div >
            <h4>Welcome to the OPEN LIBRARY Book Database</h4>
            <img src="/openlibrary-logo.svg" alt='open library logo' width="15%" height="15%" />
            <h3>Search By:</h3>
            <Form setData={setData}/>
            {data !== undefined ? (<Results data={data}/>): null}
        </div>
    );
}

