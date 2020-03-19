import React from 'react';
import '../assets/contacts.css';


export default class Name extends React.Component{
    render(){
        let{firstName,lastName}=this.props;
        return(
            <div className="name-container">
                <div className="name-image-initials-container"><p className="initials">{firstName.substring(0, 1)+lastName.substring(0, 1)}</p></div>
                <span><p className="blue-color-text">{firstName+" "+lastName}</p></span>
            </div>
        )
    }
}