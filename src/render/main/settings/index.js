import React from "react";
import B from "belle";
import { branch } from "baobab-react/higher-order";

class Settings extends React.Component {
    render() {
        return (
            <form>
                <label>Run Surveyor</label>
                <B.Toggle />
            </form>
        );
    }
}

export default branch(Settings, {});
