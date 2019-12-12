import React, {Component} from "react"
import axios from "axios";
import Book from "./Book";

class OwnedBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookISBN: [],
            bookTitle: [],
            bookQty: [],
            bookPublishingDate: [],
            bookComponents: [],
        };
        //this.storeInfoToComponent = this.storeInfoToComponent.bind(this);
    };
    
    componentDidMount() {
        axios.get("http://localhost:3001/books/")
            .then(response => {
                this.setState({
                    bookISBN: response.data.map((book) => {
                        return book.ISBN;
                    }),
                    bookTitle: response.data.map((book) => {
                        return book.title;
                    }),
                    bookQty: response.data.map((book) => {
                        return book.qty;
                    }),
                    bookPublishingDate: response.data.map((book) => {
                        return book.publishingDate;
                    }),
                    bookComponents: response.data.map(el => {
                        return (
                            <Book 
                                key={el._id}
                                bookISBN={el.ISBN}
                                bookTitle={el.title}
                                bookQty={el.qty}
                                bookPublishingDate={el.publishingDate}
                            />
                        )
                    })
                })
            })
            .catch((err) => {
                console.log(err)
            });
    };

    render() {
        return (
            <div>
                <h3>Your Books: </h3>
                <br/>
                {this.state.bookComponents}
            </div>
        );
    }
}

export default OwnedBooks;