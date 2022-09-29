import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 5 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };

  handleDelete = (id) => {
    // console.log("handle Delete called " + id);
    let counters = this.state.counters.filter((c) => c.id !== id);
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            onDelete={this.handleDelete}
            key={counter.id}
            // value={counter.value}
            // id={counter.id}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
