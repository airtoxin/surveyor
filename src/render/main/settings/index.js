import React, { Component } from "react";
import B from "belle";

export default class Settings extends Component {
    constructor(...args) {
        super(...args);

        this.state = this.props.initialSettings;
    }

    render() {
        return (
            <form>
                <div>
                    <label>Run Surveyor</label>
                    <input type="checkbox" value={this.state.run} ref="run" onChange={(event) => this.handleRunChange(event)} />
                </div>
                <div>
                    <label>Distance time</label>
                    <input type="text" value={this.state.distance} ref="distance" onChange={(event) => this.handleDistanceChange(event)} />
                </div>
            </form>
        );
    }

    handleRunChange(event) {
        this.setState({
            run: event.target.checked
        });
    }

    handleDistanceChange(event) {
        this.setState({
            distance: event.target.value
        });
    }

    serialize() {
        return this.state;
    }
}
