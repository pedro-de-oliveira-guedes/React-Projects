import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() {
        const { onReset, onDelete, onIncrement, counters } = this.props;

        return (
        <div>
            <button onClick={onReset}
                    className="btn btn-primary btn-md m-4">
                Reset the counters
            </button>

            {counters.map( counter => 
                                    (<Counter key={counter.id}
                                              onDelete={onDelete}
                                              counter={counter}
                                              onIncrement={onIncrement} />) 
                                    )}
        </div>
        );
    }
}
 
export default Counters;