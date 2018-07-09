var map = L.map("map", {
    center: [37.752361, -122.080389],
    zoom: 9
  });
  
  // Adding tile layer
  L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?" +
    "access_token=pk.eyJ1IjoiamVzc2J1cmdvcyIsImEiOiJjamlkdm14dzEwNnZqM3BwbnA3a3ZmcXZ4In0.S_8R6Xa8awTcuIXPU7jexA").addTo(map);
  // Function that will determine the color of a neighborhood based on the borough it belongs to
  function chooseColor(county) {
    switch (county) {
    case "Alameda":
      return "yellow";
    case "Contra Costa":
      return "red";
    case "Marin":
      return "orange";
    case "Napa":
      return "green";
    case "San Francisco":
      return "purple";
    case  "San Mateo":
      return "pink";
    case  "Santa Clara":
      return "blue";
    case  "Solano":
      return "pink";
    case  "Sonoma":
      return "pink";
    default:
      return "black";
    }
  }
  
  function getColor(d) {
    return d = "Sonoma" ? '#800026' :
           d = "Solano" ? '#BD0026' :
           d = "Santa Clara"  ? '#E31A1C' :
           d = "San Mateo" ? '#FC4E2A' :
           d = "San Francisco"   ? '#FD8D3C' :
           d = "Marin"  ? '#FED976' :
                      '#FFEDA0';
  }
  
  var myObject = {
    jsonOne: [],
    jsonTwo: []
  };
  var checkCounty = [];
  var combinedJSON;
  d3.json("BayAreaCounties.geojson").then(function(data){
   var newOb = data; 
   for (var i in newOb.features) {  
      checkCounty.push(newOb.features[i].properties.county);   
   }
//    for (var i in newOb) {  
//     myObject.jsonOne.push(newOb[i]);
//    }
    myObject.jsonOne.push(newOb)
    console.log(newOb)
//    console.log(Object.keys(newOb.features[0].properties.county))
  });

  d3.json("https://cors-anywhere.herokuapp.com/" + "ucb-dbc-project2.herokuapp.com/county_single_family").then(function(data) {
    var anotherObject = data;
    for (var i in anotherObject){
            // console.log(anotherObject[i].RegionName)
        myObject.jsonTwo.push(anotherObject[i])
        }
    
    console.log(myObject.jsonOne[0])

  
    var geoJson;
    
    // Grabbing our GeoJSON data..
    d3.map(myObject.jsonOne[0], function(data) {
        console.log(data)
        // Creating a geoJSON layer with the retrieved data
        geoJson = L.geoJson(data, {
        // Style for each feature (in this case a neighborhood)
        style: function(feature) {
            return {
            color: "white",
            // Call the chooseColor function to decide which color to color our neighborhood (color based on borough)
            fillColor: getColor(feature.properties.county),
            fillOpacity: 0.5,
            weight: 1.5
            };
        },
        // Called on each feature
        onEachFeature: function(feature, layer) {
            // Setting various mouse events to change style when different events occur
            layer.on({
            // On mouse over, make the feature (neighborhood) more visible
            mouseover: function(event) {
                layer = event.target;
                layer.setStyle({
                fillOpacity: 0.9
                });
            },
            // Set the features style back to the way it was
            mouseout: function(event) {
                geoJson.resetStyle(event.target);
            },
            // When a feature (neighborhood) is clicked, fit that feature to the screen
            click: function(event) {
                map.fitBounds(event.target.getBounds());
            }
            });
            // Giving each feature a pop-up with information about that specific feature
            layer.bindPopup("<h2>" + feature.properties.county + "</h2>" );
        }
        }).addTo(map);
    });
});
