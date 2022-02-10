import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.counter.value
    };

    render() {
        return (
        <div>
            <span className={this.getBadgeClasses()}>
                {this.formatCount()}
            </span>
            <button onClick={this.handleIncrementClick} className='btn btn-secondary btn-sm'>
                Increment
            </button>
            <button className="btn btn-danger m-2 btn-sm" 
                    onClick={() => {
                        this.props.onDelete(this.props.counter.id)
                    }}>
                Delete!
            </button>
        </div>
        );
    }

    handleIncrementClick = () => {
        this.setState({ value: this.state.value +1 });
    };

    getBadgeClasses() {
        let countBackground = "badge m-2 badge-";
        countBackground += this.state.value === 0 ? "warning" : "primary";
        return countBackground;
    }

    formatCount () {
        const { value } = this.state;

        return value === 0 ? <span>Zero</span> : value;
    }
}
 
export default Counter;