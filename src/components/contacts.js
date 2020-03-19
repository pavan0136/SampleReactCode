import React from 'react';
import NumberFormat from 'react-number-format';
import * as url from '../utils/url';
import APIutil from '../utils/APIutils';
import '../assets/contacts.css';
import Name from './name';
import Deal from './deal';
import Tag from './tag';

export default class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: null
        }
        this.calculateTotalValue = this.calculateTotalValue.bind(this);
    }

    async componentDidMount() {
        const response = await APIutil.getDataAPI(url.getContacts);
        this.setState({ contacts: response.contacts });
    }


    calculateTotalValue(data) {
        var arrayOfNumbers = data.map(Number);
        return <NumberFormat value={arrayOfNumbers.reduce((a, b) => a + b, 0)} displayType={'text'} thousandSeparator={true} prefix={'$'} />
    }

    render() {

        let content = null;
        let { contacts } = this.state;
        if (contacts !== null && contacts !== undefined) {
            content = contacts.map((element, index) => {
                return <tr key={index}>
                    <td><input type="checkbox" id={index} className="contactCheckbox" /></td>
                    <td> <Name firstName={element.firstName} lastName={element.lastName} /> </td>
                    <td>{this.calculateTotalValue(element.scoreValues)}</td>
                    <td>{"Chicago"}</td>
                    <td><Deal data={element} /></td>
                    <td><Tag data={element} /></td>
                </tr>
            });
        }
        return (
            <div className="container">
                <h2>Contacts</h2>
                <table className="table">
                    <thead><tr><th><input type="checkbox" className="contactCheckbox" /></th><th>Contact Name</th><th>Total Value</th><th>Location</th><th>Deals</th><th>Tags</th></tr></thead>
                    <tbody>{content}</tbody>
                </table>
            </div>
        )
    }
}