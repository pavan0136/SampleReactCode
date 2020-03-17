import React from 'react';
import * as url from 'utils/url';
import APIutil from 'utils/APIutils';
import 'assets/contacts.css';
import NumberFormat from 'react-number-format';




export default class Contacts extends React.Component{
    constructor(props){
        super(props);
        this.state={
            contacts:null
        }
         this.calculateTotalValue = this.calculateTotalValue.bind(this);
    }
    componentDidMount(){
       // console.log(url.getContacts);
        APIutil.getDataAPI(url.getContacts).then(response => {
            console.log(response.contacts);
            if(response.hasOwnProperty('contacts')){
                this.setState({contacts:response.contacts});
            }
           
          }).catch(error => {
              console.log("error thrown")
              throw error;
          });
    }

    calculateTotalValue(data){
        var arrayOfNumbers = data.map(Number);
     //var data=  <NumberFormat value={arrayOfNumbers.reduce((a, b) => a + b, 0)} displayType={'text'} thousandSeparator={true} prefix={'$'} />
      // return arrayOfNumbers.reduce((a, b) => a + b, 0);
       return<NumberFormat value={arrayOfNumbers.reduce((a, b) => a + b, 0)} displayType={'text'} thousandSeparator={true} prefix={'$'} />
   
    }

    render(){

        let content = null;
        let {contacts}= this.state;
if(contacts!==null){

    content = contacts.map((element,index)=>{
        return  <tr key={index}>
                <td><input type="checkbox" id={index}/></td>
                <td>{element.firstName + element.lastName}</td>
                <td>{this.calculateTotalValue(element.scoreValues)}</td>
                <td>{element.phone}</td>
                <td>{element.phone}</td>
                <td>{element.phone}</td>
        </tr>
      });


}
        return(
            <div className="container">
                <h2>Contacts</h2>
                <table className="table">
                <thead><tr><th><input type="checkbox"/></th><th>Contact Name</th><th>Total Value</th><th>Location</th><th>Deals</th><th>Tags</th></tr></thead>
                  <tbody>{content}</tbody> 
                </table>
            </div>
        )
    }
}