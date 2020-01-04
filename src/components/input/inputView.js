import React from 'react';
import "./input.css"

class input extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="inputContainer">
                <label className="inputLabel">Email</label>
                <input className="inputBox"/>
            </div>
         );
    }
}
 
export default input;