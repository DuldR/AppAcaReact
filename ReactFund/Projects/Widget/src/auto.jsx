import React from "react";

class Auto extends React.Component {

    constructor(props) {
        super(props);

        this.state = { names: this.props.content};

        this.fillNames = this.fillNames.bind(this);
        this.searchNames = this.searchNames.bind(this);

    }

    fillNames () {
        return (


            this.state.names.map((ele, idx) => {
                return <li key={idx}>{ele}</li>
            })
        )
    }

    searchNames (inp) {

        let newNames = [];
        
        this.state.names.forEach((ele) => {})

    }

    render() {
        return (
            <div className="auto">

                <h1 className="split-header">Auto</h1>
                <input onChange={this.searchNames} className="auto-input" placeholder="Search..."></input>
                <div className="name-box">
                    <ul>
                        {this.fillNames()}
                    </ul>
                    
                </div>
                
                
            </div>
        )
    }

}

export default Auto;