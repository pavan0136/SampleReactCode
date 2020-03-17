import React from 'react';
import '../assets/contacts.css';


export default class Name extends React.Component{
    render(){
        let{firstName,lastName}=this.props;
        console.log(this.props.name)
        return(
            <div className="container">
                <div className="name-image-initials-container">{firstName.substring(0, 1)+lastName.substring(0, 1)}</div>
                <p>{firstName+" "+lastName}</p>
            </div>
        )
    }
}