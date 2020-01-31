import React, { Component } from "react";

class Counter extends Component {
    state = {
        value: this.props.value
        // tags: []
    };
    style = {
        fontSize: 10,
        fontWeight: "bold"
    };
    //To Bind Event handlers use arrow functions while defining functions or use constructors
    // and bind every event handlers used in the code

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    handleIncrement = () => {
        this.setState({ value: this.state.value + 1 });
    };

    render() {
        return (
            <div>
                <span style={this.style} className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button
                    onClick={() => this.handleIncrement()}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
                <button
                    onClick={() => this.props.onDelete(this.props.id)}
                    className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>
                {/* <ul>
                    {this.state.tags.map(tag => (
                        <li key={tag}>{tag}</li>
                    ))}
                </ul> */}
                {/* {this.state.tags.length === 0 && "Please create new tags"}
                {this.renderTags()} */}
            </div>
        );
    }

    // renderTags() {
    //     if (this.state.tags.length === 0) return "There are no tags!";
    //     return (
    //         <ul>
    //             {this.state.tags.map(tag => (
    //                 <li key={tag}>{tag}</li>
    //             ))}
    //         </ul>
    //     );
    // }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value: count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;