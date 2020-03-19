// import APIutil from './APIutils';
// import * as url from './url';

// export default class Actions {

//     static getDeals(dealsURL) {      
//         return  APIutil.getDataAPI( dealsURL).then(function(response){

//               if(response.hasOwnProperty('deals')){
//                  var deals= response.deals.map(element=>element.title);
//                    var daad = deals.join(',');
//                   return daad;
//               }
//           }).catch(error => {
//               throw error;
//           });
//       }

//     static getTags(tagsURL) {        // Returning List of Currencies
//         APIutil.getDataAPI(tagsURL).then(response => {
//             if(response.hasOwnProperty('deals')){
//                 console.log(response.deals);
//             }
//         }).catch(error => {
//             throw error;
//         });
//     }


// }


