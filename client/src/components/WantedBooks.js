import React from "react";
import axios from "axios";
import TempBook from "./TempBook";

class WantedBooks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            collection: []
        };
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };

    componentDidMount() {
        axios.get("http://localhost:3001/tempbooks/")
            .then(response => {
                this.setState({
                    collection: response.data.map((el) => {
                        return (
                            <TempBook 
                                key={el._id}
                                tempTitle={el.title}
                            />
                        )
                    })
                })
            })
    }

    handleTitleChange(e) {
        this.setState({
            title: e.target.value
        });
    };

    onSubmit(e) {
        //e.preventDefault();

        const temp = {
            title: this.state.title
        };
        console.log(temp);

        axios.post("http://localhost:3001/tempbooks/add", temp)
            .then((res) => {
                console.log(res.data);
            })
            
        this.setState({
            title: ""
        });
    }

    render() {
        return (
            <div>
                <h3>Wanted books here</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Enter the name of the book that you want: </label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            placeholder="Enter the book's name"
                            value={this.state.title}
                            onChange={this.handleTitleChange}
                        />
                    </div>
                    <button className="btn btn-primary">Submit Information</button>
                </form>
                <p>Your books:</p>
                {this.state.collection}
            </div>
        )
    }
}

export default WantedBooks;