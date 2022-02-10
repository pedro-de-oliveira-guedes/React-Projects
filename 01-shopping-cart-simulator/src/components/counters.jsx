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

    onDelete = () => {
        console.log("I got a feeling");
    };

    render() { 
        return (
        <div>
            { this.state.counters.map( counter => 
                                    (<Counter key={counter.id}
                                              value={counter.value}
                                              onDelete={this.onDelete} />) 
                                    )}
        </div>
        );
    }
}
 
export default Counters;