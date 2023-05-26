import React from "react";
import { AlertWrap } from "./alertMocks";

export class Alert extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            visible: false,
        }
    }
    componentDidMount(): void {
        setTimeout(() => {
            this.setState({visible: true})
        }, 5000);
    }

    render() {
        return this.state.visible ? <AlertWrap visible={true}/> : null
    } 
}
