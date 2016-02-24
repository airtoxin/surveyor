import React, { Component } from "react";
import P from "react-photonkit";
import { branch } from "baobab-react/higher-order";
import Settings from "./settings";

export default class Main extends Component {
    constructor(...args) {
        super(...args);

        this.previousState = {
            settings: this.props.initialSettings
        };
        this.state = {
            settings: this.props.initialSettings
        };
    }

    handleCancelClick() {
        console.log("@this.previousState", this.previousState);
    }

    handleSaveClick() {
        const serialized = {
            settings: this.refs.settings.serialize()
        };
        console.log("@serialized", serialized);
    }

    render() {
        return (
            <P.Window>
                <P.Toolbar title="Surveyor settings" />
                <P.Content>
                    <div style={{padding: "20px"}}>
                        <Settings ref="settings" initialSettings={this.state.settings}/>
                    </div>
                </P.Content>
                <P.Toolbar psType="footer">
                    <P.Actionbar>
                      <P.Button text="cancel" onClick={() => this.handleCancelClick()} />
                      <P.Button text="save" ptStyle="primary" pullRight onClick={() => this.handleSaveClick()}/>
                    </P.Actionbar>
                </P.Toolbar>
            </P.Window>
        );
    }
}
