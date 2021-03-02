import React from "react";

class Auto extends React.Component {

    constructor(props) {
        super(props);

        this.state = { names: this.props.content, filter: this.props.content };

        this.fillNames = this.fillNames.bind(this);
        this.searchNames = this.searchNames.bind(this);

    }

    fillNames () {
        return (


            this.state.filter.map((ele, idx) => {
                return <li key={idx}>{ele}</li>
            })
        )
    }

    searchNames (inp) {

        // This CONCEPTUALLY works.

        let newNames = [];
        
        this.state.names.forEach((ele) => {

            if (ele.substring(0, inp.length) === inp) {
                newNames.push(ele);
            }

        })

        this.setState( {filter: newNames} )

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