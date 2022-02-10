import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: ["tag1", "tag2", "tag3"]
    };

    render() {
        return (
        <React.Fragment>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={this.handleIncrementClick} className='btn btn-secondary btn-sm'>Increment</button>
            { this.renderTags() }
        </React.Fragment>
        );
    }

    handleIncrementClick = () => {
        this.setState({ count: this.state.count +1 });
    };

    renderTags() {
        if (!this.state.tags) {
            return <p>There are no Tags!</p>
        }

        return <ul> {this.state.tags.map(tag => <li key={ tag }> { tag } </li>)} </ul>
    }

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