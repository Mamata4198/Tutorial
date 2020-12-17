import React, { Component } from 'react';


class menubar extends Component {
    render() {
        return (
            <div>
            <h1 className="menubar">MenuBar</h1>
            
            <div className="img">
            <img src="/image.jpg" alt=""/><br/><br/>
            <a href="#page1">Open page1</a><br /><br />
            <a href="#page2">Open page2</a>
                
            </div>
            </div>
        );
    }
}

export default menubar;