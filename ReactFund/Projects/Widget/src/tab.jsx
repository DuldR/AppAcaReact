import React from "react";

class Tab extends React.Component {
    constructor(props) {
        super(props);

        this.state = { tabIndex: 0, tabContent: this.props.content };

        // EventHandlers
        this.tabChange = this.tabChange.bind(this);

        // Methods
        this.tabTitles = this.tabTitles.bind(this);
        this.tabContent = this.tabContent.bind(this);
    }

    tabTitles () {
        return (
            this.state.tabContent.map((ele, idx) => <li id={idx} key={idx}>{ele.title}</li>)
        )
    }
    
    // Could be one line
    tabContent() {
        let index = this.state.tabIndex;
        return (
            this.state.tabContent[index].content
        )
    }

    tabChange(event) {
        event.preventDefault();
        this.setState( {tabIndex: event.target.id} )
    }

    render() {
        return (

            <div className="tab">

                <h1 className="header">Tab</h1>
                <div onClick={this.tabChange} className="tab-header">{this.tabTitles()}</div>
                <article className="tab-content">{this.tabContent()}</article>
                
                
            </div>
        )
    }
}

export default Tab;