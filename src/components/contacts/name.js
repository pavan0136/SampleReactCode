import React from 'react';
// import '../assets/contacts.css';


export default class Name extends React.Component{
    render(){
        let{firstName,lastName}=this.props;
        let fn = "Alan" ;
        let ln="White";

        if(firstName !=="" || lastName!==""){
            fn =firstName;
            ln =lastName;
        }
      
        return(
            <div className="name-container">
                <div className="name-image-initials-container"><p className="initials">{fn.substring(0, 1)+ln.substring(0, 1)}</p></div>
                <span><p className="blue-color-text">{fn+" "+ln}</p></span>
            </div>
        )
    }
}