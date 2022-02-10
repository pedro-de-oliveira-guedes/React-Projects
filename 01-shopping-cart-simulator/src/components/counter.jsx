import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: ["tag1", "tag2", "tag3"]
    };

    render() {
        return (
        <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={this.handleIncrementClick} className='btn btn-secondary btn-sm'>Increment</button>
        </div>
        );
    }

    handleIncrementClick = () => {
        this.setState({ count: this.state.count +1 });
    };

    getBadgeClasses() {
        let countBackground = "badge m-2 badge-";
        countBackground += this.state.count === 0 ? "warning" : "primary";
        return countBackground;
    }

    formatCount () {
        const { count } = this.state;

        return count === 0 ? <span>Zero</span> : count;
    }
}
 
export default Counter;