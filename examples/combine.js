// var myObject = {
//     jsonOne: '',
//     jsonTwo: ''
// }
// var combinedJSON;
// d3.json("BayAreaCounties.geojson",function(data) {
//    var newOb = data;
//    console.log(newOb)
//    myObject.jsonOne = newOb;
//    d3.json("https://cors-anywhere.herokuapp.com/" + "ucb-dbc-project2.herokuapp.com/county_single_family", function(data) {
//         var anotherObject = data;
//         myObject.jsonTwo = anotherObject;
//         // console.log(myObject)
//         combinedJSON = JSON.stringify(myObject)
//         // console.log(combinedJSON)
//         myDisplayFunction(combinedJSON);
//         console.log(Object.keys(combinedJSON))
//    });
// });

// var myDisplayFunction = function(json){
//     console.log(json)
//     console.log(Object.keys(json))
// }
// var myObject = {
//     jsonOne: [],
//     jsonTwo: []
// }
// var combinedJSON;
// d3.json("BayAreaCounties.geojson",\function(data) {
//    var newOb = data; 
//    var checkCounty = [];
//    for (var i in newOb.features) {  
//       checkCounty.push(newOb.features[i].properties.county);   
//    }
// //    for (var i in newOb) {  
// //     myObject.jsonOne.push(newOb[i]);
// //    }
//     myObject.jsonOne.push(newOb)
// //    console.log(Object.keys(newOb.features[0].properties.county))
   
//    d3.json("https://cors-anywhere.herokuapp.com/" + "ucb-dbc-project2.herokuapp.com/county_single_family", function(data) {
//         var anotherObject = data;
//         for (var i in anotherObject){
//             // console.log(anotherObject[i].RegionName)
//             myObject.jsonTwo.push(anotherObject[i])
//         }
//         console.log(myObject)
//         console.log(myObject.jsonOne[0])
//    });
   
// //    console.log(checkCounty)
// });
// // console.log(myObject.jsonOne.indexOf(
// //     "FeatureCollection"))
// var a = myObject.jsonOne.indexOf("FeatureCollection");
// console.log(myObject.jsonOne[0])
// // var myObject = {
//     json1: json1,
//     json2: json2,
// };
// var combinedJSON = JSON.stringify(myObject);

// console.log(combinedJSON)

// console.log(json1)

var myObject = {
    jsonOne: [],
    jsonTwo: []
}
var combinedJSON;
d3.json("BayAreaCounties.geojson").then(function(data){
   var newOb = data; 
   var checkCounty = [];
   for (var i in newOb.features) {  
      checkCounty.push(newOb.features[i].properties.county);   
   }
//    for (var i in newOb) {  
//     myObject.jsonOne.push(newOb[i]);
//    }
    myObject.jsonOne.push(newOb)
//    console.log(Object.keys(newOb.features[0].properties.county))
});

d3.json("https://cors-anywhere.herokuapp.com/" + "ucb-dbc-project2.herokuapp.com/county_single_family").then(function(data) {
    var anotherObject = data;
    for (var i in anotherObject){
            // console.log(anotherObject[i].RegionName)
        myObject.jsonTwo.push(anotherObject[i])
        }
    console.log(myObject)
    console.log(myObject.jsonOne[0])
   });
   
//    console.log(checkCounty)

// console.log(myObject.jsonOne.indexOf(
//     "FeatureCollection"))

console.log(myObject.jsonOne[0])
