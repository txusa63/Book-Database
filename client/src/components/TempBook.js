import React from "react"

function TempBook(props) {
    return (
        <div className="container">
            <ul>
                <li>
                    <p>{props.tempTitle}</p>
                </li>
            </ul>
        </div>
    )
}

export default TempBook;