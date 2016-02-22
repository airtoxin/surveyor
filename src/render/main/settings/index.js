import React from "react";
import B from "belle";

export default class Settings extends React.Component {
    render() {
        return (
            <form>
                <label>Run Surveyor</label>
                <B.Toggle defaultValue={this.props.settings.run} />
            </form>
        );
    }
}
