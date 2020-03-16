import React from 'react';
import * as url from 'utils/url';
import APIutil from 'utils/APIutils';



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
       return arrayOfNumbers.reduce((a, b) => a + b, 0)
    }

    render(){

        let content = null;
        let {contacts}= this.state;
if(contacts!==null){

    content = contacts.map((element,index)=>{
        return  <tr><td>{index+1}</td>
                <td>{element.firstName + element.lastName}</td>
                <td>{this.calculateTotalValue(element.scoreValues)}</td>
                <td>{element.phone}</td>
        </tr>
      });


}
        return(
            <div>
                <h2>contacts List</h2>
                <table>
                    <tr><th>S.No</th><th>Contact Name</th><th>Total Value</th><th>Location deals</th><th>Tags</th></tr>
                    {content}
                </table>
            </div>
        )
    }
}