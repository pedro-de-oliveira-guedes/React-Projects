import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
                    {id: 1, value: 0},
                    {id: 2, value: 0},
                    {id: 3, value: 5},
                    {id: 4, value: 0},
                ]
    }

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(counter => counter.id !== counterId);
        this.setState({ counters })
    };

    handleIncrement = (counter) => {
        console.log("Let me take you on a little trip", counter);
        const index = this.state.counters.indexOf(counter);
        const counters = [...this.state.counters];

        counters[index] = {...counter};
        counters[index].value++;
        this.setState({ counters });
    };

    handleReset = () => {
        const counters = this.state.counters.map(counter => {
            counter.value = 0;
            return counter;
        });
        this.setState({ counters });
    };

    render() { 
        return (
        <div>
            <button onClick={this.handleReset}
                    className="btn btn-primary btn-md m-4">
                Reset the counters
            </button>

            { this.state.counters.map( counter => 
                                    (<Counter key={counter.id}
                                              onDelete={this.handleDelete}
                                              counter={counter}
                                              onIncrement={this.handleIncrement} />) 
                                    )}
        </div>
        );
    }
}
 
export default Counters;