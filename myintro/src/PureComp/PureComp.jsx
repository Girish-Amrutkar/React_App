import React, { PureComponent } from 'react'

export default class PureComp extends PureComponent {
    render() {
        console.log("******Pure Comp*********");
        return (
            <div>
                <h1>Pure Component {this.props.name1}</h1>
            </div>
        )
    }
}
