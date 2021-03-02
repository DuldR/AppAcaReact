import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Auto extends React.Component {

    constructor(props) {
        super(props);

        this.state = { names: this.props.content, filter: this.props.content, value: "" };

        this.fillNames = this.fillNames.bind(this);
        this.searchNames = this.searchNames.bind(this);
        this.pickName = this.pickName.bind(this);

    }

    pickName (e) {
        e.preventDefault();
        this.setState( {filter: [e.target.innerHTML], value: [e.target.innerHTML]})
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
        inp.preventDefault();

        let newNames = [];
        let trg = inp.currentTarget.value
        
        this.state.names.forEach((ele) => {

            if (ele.substring(0, trg.length).toLowerCase() === trg.toLowerCase()) {
                newNames.push(ele);
            }

        })

        this.setState( {filter: newNames, value: inp.currentTarget.value} )

    }

    render() {

        const{names, filter, value} = this.state

        return (
            <div className="auto">

                <h1 className="split-header">Auto</h1>
                <div className="name-box">
                    <input onChange={this.searchNames} className="auto-input" placeholder="Searching..." value={this.state.value}></input>
                    <ul onClick={this.pickName}>
                        <ReactCSSTransitionGroup
                            transitionName="auto"
                            transitionEnterTimeout={500}          transitionLeaveTimeout={300}>
                            {this.fillNames()}
                        </ReactCSSTransitionGroup>
                    </ul>

                    
                </div>
                
                
            </div>
        )
    }

}

export default Auto;