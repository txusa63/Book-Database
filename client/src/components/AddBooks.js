import React, {Component} from "react";
import axios from "axios";
//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";

class AddBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ISBN: "",
            title: "",
            qty: "",
            publishingDate: "",
        };
        this.handleISBNChange = this.handleISBNChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleQtyChange = this.handleQtyChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleISBNChange(e) {
        this.setState({
            ISBN: e.target.value
        });
    }

    handleTitleChange(e) {
        this.setState({
            title: e.target.value
        });
    }

    handleQtyChange(e) {
        this.setState({
            qty: e.target.value
        });
    }

    handleDateChange(e) {
        this.setState({
            publishingDate: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const book = {
            ISBN: this.state.ISBN,
            title: this.state.title,
            qty: this.state.qty,
            publishingDate: this.state.publishingDate
        };
        console.log(book);

        axios.post("http://localhost:3001/books/add", book)
            .then(res => console.log(res.data));
        
        this.setState({
            ISBN: "",
            title: "",
            qty: "",
            publishingDate: ""
        })

        //window.location = "/";
    }
    
    render() {
        return (
            <div>
                <h3>Add Book Titles Below: </h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Book ISBN: </label>
                        <input 
                            type="text"
                            required
                            className="form-control"
                            placeholder="Enter ISBN"
                            value={this.state.ISBN}
                            onChange={this.handleISBNChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Book Title: </label>
                        <input 
                            type="text"
                            required 
                            className="form-control"
                            placeholder= "Enter book title"
                            value={this.state.title}
                            onChange={this.handleTitleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Book Quantity: </label>
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="Enter book quantity"
                            value={this.state.qty}
                            onChange={this.handleQtyChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        {/* <div>
                            <DatePicker 
                                selected={this.state.publishingDate}
                                onChange={this.handleDateChange}
                            />
                        </div> */}
                        <input
                            type="text"
                            required
                            className="form-control"
                            placeholder="Enter date in MM/YYYY format"
                            value={this.state.publishingDate}
                            onChange={this.handleDateChange}
                        />
                    </div>
                    <div className="form-group">
                        {/* <input 
                            type="submit"
                            className="btn btn-primary"
                            value="Add Book"
                        /> */}
                        <button className="btn btn-primary">Submit Request</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddBooks;