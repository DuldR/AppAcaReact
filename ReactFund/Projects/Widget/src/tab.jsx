import React from "react";

class Tab extends React.Component {
    constructor(props) {
        super(props);

        this.state = { tabIndex: 0, tabContent: this.props.content };
        this.tabTitles = this.tabTitles.bind(this);
    }

    tabTitles () {
        let butts = [1,2,3]
       

        return (

            // butts.map((ele, idx) => <li key={idx}>{ele}</li>)
            this.state.tabContent.map((ele, idx) => <li key={idx}>{ele.content}</li>)
        )

    }

    render() {
        return (

            <div className="tab">

                <div className="header">Tab</div>
                <h1>{this.tabTitles()}</h1>
                
                
            </div>
        )
    }
}

export default Tab;