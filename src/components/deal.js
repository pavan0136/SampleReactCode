import React from 'react';
import APIutil from '../utils/APIutils';


export default class Deal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deal: null
        }
        this.getSubData = this.getSubData.bind(this);
    }

    async componentDidMount() {
        let { data} = this.props;
        if(data!==null){
            this.getSubData(data, "deals");
        }
    }


     getSubData(element, type) {
        if (element.hasOwnProperty('links')) {
            if (element['links'].hasOwnProperty(type)) {
                let str = element.links[type];
                var url = str.split('https://lamppoststudios.api-us1.com/');
            APIutil.getDataAPI(url[1]).then((response)=>{
                if(response.hasOwnProperty('deals')){
                    var deals= response.deals.map(element=>element.title);
                      var daad = deals.join(',');
                      this.setState({deal: daad});
                 }
            });
            }
        }
    }

    render() {
        return  <p>{this.state.deal}</p>;
    }
}