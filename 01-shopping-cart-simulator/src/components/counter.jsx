import React, { Component } from 'react';

class Counter extends Component {
    render() {
        const {getBadgeClasses, counter, onDecrement, onDelete, onIncrement} = this.props;

        return (
        <div className='d-flex align-items-center'>
            <span className={this.getBadgeClasses()}>
                {this.formatCount()}
            </span>

            <button onClick={() => onIncrement(counter)} 
                    className='increment-btn btn btn-secondary btn-sm'>
                +
            </button>

            <button onClick={() => onDecrement(counter)} 
                    className='decrement-btn btn btn-secondary btn-sm'>
                -
            </button>

            <button className="remove-btn btn btn-danger m-2 btn-sm" 
                    onClick={() => onDelete(counter.id)}>
                Remove
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