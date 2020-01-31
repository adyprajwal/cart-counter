import React, { Component } from "react";

class Counter extends Component {
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

    render() {
        return (
            <div>
                <span style={this.style} className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>

                <button
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>

                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value: count } = this.props.counter;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;
