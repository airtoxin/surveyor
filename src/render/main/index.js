import React from "react";
import Photon from "react-photonkit";

export default class Main extends React.Component {
    render() {
        return (
            <Photon.Window>
                <Photon.Toolbar title="header" />
                <Photon.Content />
                <Photon.Toolbar psType="footer" title="Surveyor" />
            </Photon.Window>
        );
    }
}
