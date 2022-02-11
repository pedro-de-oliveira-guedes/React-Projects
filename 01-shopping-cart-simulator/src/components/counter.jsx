import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
        <div className='d-flex align-items-center'>
            <span className={this.getBadgeClasses()}>
                {this.formatCount()}
            </span>

            <button onClick={() => this.props.onIncrement(this.props.counter)} 
                    className='btn btn-secondary btn-sm'>
                Increment
            </button>

            <button className="btn btn-danger m-2 btn-sm" 
                    onClick={() => this.props.onDelete(this.props.counter.id)}>
                Delete!
            </button>
        </div>
        );
    }

    getBadgeClasses() {
        let countBackground = "counter-quantity d-flex align-items-center justify-content-center badge m-2 badge-";
        countBackground += this.props.counter.value === 0 ? "warning" : "primary";
        return countBackground;
    }

    formatCount () {
        const { value } = this.props.counter;

        return value === 0 ? <span>Zero</span> : value;
    }
}
 
export default Counter;