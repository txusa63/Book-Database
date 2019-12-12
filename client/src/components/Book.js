import React from "react"

function Book(props) {
    const divStyle = {

    };
    const pStyle = {
        color: "black",
        fontSize: "12px",

    };
    return (
        <div className="container">
            <ul className="list-group">
                <li className="list-group-item">
                    <p style={pStyle}>ISBN: {props.bookISBN}</p>
                    <p style={pStyle}>Title: {props.bookTitle}</p>
                    <p style={pStyle}>Qty: {props.bookQty}</p>
                    <p style={pStyle}>Date of Publication: {props.bookPublishingDate}</p>
                </li>
            </ul>
        </div>
    );
}

export default Book;