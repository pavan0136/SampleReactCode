import React from 'react';
import APIutil from '../utils/APIutils';


export default class Tag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactTag: null
        }
        this.getSubData = this.getSubData.bind(this);
    }

    async componentDidMount() {
        let { data} = this.props;
        if(data!==null){
            this.getSubData(data, "contactTags");
        }
    }


    getSubData(element, type) {
        if (element.hasOwnProperty('links')) {
            if (element['links'].hasOwnProperty(type)) {
                let str = element.links[type];
                var url = str.split('https://lamppoststudios.api-us1.com/');

            APIutil.getDataAPI(url[1]).then((response)=>{
                if(response.hasOwnProperty('contactTags')){
                    var deals= response.contactTags.map((element)=>{
                        return element.tag});
                      var daad = deals.join(',');
                      this.setState({contactTag: daad});
                 }
            });
            }
        }
    }

    render() {

        return  <p>{this.state.contactTag}</p>;
    }
}