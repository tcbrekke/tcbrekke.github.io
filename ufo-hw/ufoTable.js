//Declare variable that houses data from data.js
var ufoData = dataSet;

//Declar variables to locate table element and tbody in index.html
var table = document.querySelector('#ufo-table');
var tbody = document.getElementById('ufo-table-body');

//Declare variables that allow for user input filters to be stored
var useFilter = document.querySelector("#filter-submit"); 
useFilter.addEventListener('click', handleFilterSubmit);
var countryFilterInput;
var stateFilterInput;
var cityFilterInput;
var dateInput;

//Declare array which will store final filtered values
var filteredArray = [];

function addItem(row, text) {

	var newCell = row.insertCell();
	var newText = document.createTextNode(text);
	newCell.appendChild(newText);

};
// Render table with all entries if no filters have been specified
if (!stateFilterInput) {
	console.log("filterInput has no value");
	if (!dateInput) {
		console.log("dateInput has no value");
		if (!cityFilterInput) {
			console.log("cityFilterInput has no value");
			if (!countryFilterInput) {
				console.log("countryFilterInput has no value");
				renderTable(ufoData);
			}
		}
	}
}

function filterByDate(date) {
	var date = date;
	filteredArray = ufoData.filter(function(cObj) { 
		var checkForDate = new Date(cObj.datetime).toUTCString().slice(0, 16);
				console.log(checkForDate);
		return checkForDate === date;
	})
}

function filterByCountry(country) {
	var country = country;
	filteredArray = ufoData.filter(function(cObj) { 
		var checkForCountry = (cObj.country).value.trim().toLowerCase();
		console.log(checkForCountry);
		return checkForCountry === country;
	})
}

function filterByState(state) {
	var state = state;
	filteredArray = ufoData.filter(function(cObj) { 
		var checkForState = (cObj.state).value.trim().toLowerCase();
		console.log(checkForState);
		return checkForState === state;
	})
}

function filterByCity(city) {
	var city = city;
	filteredArray = ufoData.filter(function(cObj) { 
		var checkForCity = (cObj.city).value.trim().toLowerCase();
		console.log(checkForCity);
		return checkForCity === city;
	})
}
// function filterByDate(date) {
// 	for (var i = 0; i < ufoData.length; i++) {
// 		var currentDate = new Date(ufoData[i].datetime).toString().slice(0, 15);
// 		console.log(currentDate);
// 		if (currentDate == date) {
// 			console.log(ufoData[i]);
// 			currentEntry = ufoData[i];
// 			for (var j = 0; j < Object.keys(currentEntry).length; j++) {
// 				console.log(currentEntry);
// 				filteredArray.push( {
// 					datetime: currentEntry.datetime,
// 					city: currentEntry.city,
// 					state: currentEntry.state,
// 					country: currentEntry.country,
// 					shape: currentEntry.shape,
// 					durationMinutes: currentEntry.durationMinutes,
// 					comments: currentEntry.comments
// 				})
// 			};
// 		};
// 	};
// 	if (filteredArray.length > 0) {
// 		console.log(Object.entries(filteredArray));
// 		renderTable(filteredArray);
// 	};
// }



function handleFilterSubmit(event) {
	dateInput = new Date(document.querySelector("#date-input").value);
	stateFilterInput = document.querySelector("#state-filter-input").value.trim().toLowerCase();
	cityFilterInput = document.querySelector("#city-filter-input").value.trim().toLowerCase();
	countryFilterInput = document.querySelector("#country-filter-input").value.trim().toLowerCase();
	event.preventDefault();
	if (dateInput) {
		var simpleDate = new Date(dateInput).toUTCString().slice(0, 16);
		console.log(`Filtering entries for ${simpleDate}`)
		filterByDate(simpleDate);
	};
	// if (stateFilterInput) {
	// 	console.log(`Filtering based on input: "${stateFilterInput}`);
	// 	filterByState(stateFilterInput)
	// };
	// if (cityFilterInput) {
	// 	console.log(`Filtering based on input: "${cityFilterInput}`);
	// 	filterByCity(cityFilterInput)
	// };
	// if (countryFilterInput) {
	// 	console.log(`Filtering based on input: "${countryFilterInput}`);
	// 	filterByCountry(countryFilterInput)
	// }
	if (filteredArray); {
		console.log(filteredArray);
		renderTable(filteredArray);
	}
	
};

function renderTable(dataset) {
	tbody.innerHTML = "";
	if (!dataset) {
		dataset = ufoData;
	};
	console.log(dataset)
	for (var i = 0; i < dataset.length; i++) {
		var entry = dataset[i];
		var tr = tbody.insertRow();
		var sightingDate = addItem(tr, entry.datetime);
		var sightingCity = addItem(tr, entry.city);
		var sightingState = addItem(tr, entry.state);
		var sightingCountry = addItem(tr, entry.country);
		var sightingShape = addItem(tr, entry.shape);
		var sightingDuration = addItem(tr, entry.durationMinutes);
		var sightingComment = addItem(tr, entry.comments);
		};
	};