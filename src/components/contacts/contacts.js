import React from 'react';
import NumberFormat from 'react-number-format';
import Resource from '../../utils/resource'
import * as url from '../../utils/url';
import APIutil from '../../utils/APIutils';
import '../../assets/contacts.css';
import Spinner from "../shared/spinner";
import Exception from "../shared/exceptionMessage";
import Name from './name';
import Deal from './deal';
import Tag from './tag';


export default class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: null,
            error: false
        }
        this.calculateTotalValue = this.calculateTotalValue.bind(this);
        this.displayContent = this.displayContent.bind(this);
    }

    async componentDidMount() {
        const response = await APIutil.getDataAPI(url.getContacts);
        if (response.status === 200) {
            console.log(response);

            this.setState({ contacts: response.data.contacts });
        }
        else {
            this.setState({ error: true });
        }

    }
    render() {
        return (
            <div className="container">
                {this.displayContent()}
            </div>
        )
    }

    displayContent() {
        let content = null;
        let { contacts, error } = this.state;
        if (contacts !== null && contacts !== undefined) {
            content = contacts.map((element, index) => {
                return <tr key={index}>
                    <td><input type="checkbox" id={index} className="body_checkBoxes" /></td>
                    <td> <Name firstName={element.firstName} lastName={element.lastName} /> </td>
                    <td>{this.calculateTotalValue(element.scoreValues)}</td>
                    <td>{"Chicago"}</td>
                    <td><Deal data={element} /></td>
                    <td><Tag data={element} /></td>
                </tr>
            });

            return <table className="table">
                <thead><tr><th><input type="checkbox" className="header_checkBox" onClick={() => { Resource.selectAllCheckbox("body_checkBoxes", "header_checkBox"); }} /></th>
                <th>Contact Name</th><th>Total Value</th><th>Location</th><th>Deals</th><th>Tags</th></tr></thead>
                <tbody>{content}</tbody>
            </table>;
        }
        else if (error === true) {
            return <Exception />
        }
        else {
            return <Spinner loading={true} />
        }
    }

    calculateTotalValue(data) {
        var arrayOfNumbers = data.map(Number);
        return <NumberFormat value={arrayOfNumbers.reduce((a, b) => a + b, 0)} displayType={'text'} thousandSeparator={true} prefix={'$'} />
    }


}