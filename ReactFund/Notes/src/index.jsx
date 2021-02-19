import React from 'react';

console.log("Webpack");

class ClickCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }

    render() {
        return (
            <div></div>
        )
    }

}

export default ClickCounter;