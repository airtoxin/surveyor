import React from "react";
import P from "react-photonkit";
import { root } from "baobab-react/higher-order";
import tree from "./tree";
import Settings from "./settings";

class Main extends React.Component {
    render() {
        return (
            <P.Window>
                <P.Toolbar title="Surveyor settings" />
                <P.Content>
                    <div style={{padding: "20px"}}>
                        <Settings />
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

export default root(Main, tree);
