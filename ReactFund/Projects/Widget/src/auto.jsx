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
        let trg = inp.currentTarget.value
        
        this.state.names.forEach((ele) => {

            console.log(ele);
            console.log(trg);

            if (ele.substring(0, trg.length).toLowerCase() === trg.toLowerCase()) {
                newNames.push(ele);
            }

        })

        console.log(newNames);

        this.setState( {filter: newNames} )

        console.log(inp.currentTarget.value.length);

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