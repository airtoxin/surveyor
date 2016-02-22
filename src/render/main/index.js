import React from "react";
import P from "react-photonkit";
import Settings from "./settings";

export default class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            settings: {
                run: false
            }
        };
    }

    render() {
        return (
            <P.Window>
                <P.Toolbar title="Surveyor settings" />
                <P.Content>
                    <div style={{padding: "20px"}}>
                        <Settings refs="settings" settings={this.state.settings} />
                    </div>
                </P.Content>
                <P.Toolbar psType="footer">
                    <P.Actionbar>
                      <P.Button text="cancel" />
                      <P.Button text="save" ptStyle="primary" pullRight />
                    </P.Actionbar>
                </P.Toolbar>
            </P.Window>
        );
    }
}
