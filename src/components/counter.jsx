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
            <div className="container container-fluid">
                <div className="row">
                    <div className="col-1">
                        <span
                            style={this.style}
                            className={this.getBadgeClasses()}
                        >
                            {this.formatCount()}
                        </span>
                    </div>
                    <div className="col">
                        <button
                            onClick={() =>
                                this.props.onIncrement(this.props.counter)
                            }
                            className="m-2 btn btn-secondary btn-sm"
                        >
                            +
                        </button>

                        <button
                            onClick={() =>
                                this.props.onDecrement(this.props.counter)
                            }
                            className="m-2 btn btn-secondary btn-sm"
                            disabled={
                                this.props.counter.value === 0 ? "disabled" : ""
                            }
                        >
                            -
                        </button>

                        <button
                            onClick={() =>
                                this.props.onDelete(this.props.counter.id)
                            }
                            className="m-2 btn btn-danger btn-sm"
                        >
                            Delete
                        </button>
                    </div>
                </div>
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
