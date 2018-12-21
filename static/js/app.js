// tbody, input fields and search
var $tbody = document.querySelector("tbody");
var $datefield = document.querySelector("#date");
var $cityfield = document.querySelector("#city");
var $statefield = document.querySelector("#state");
var $countryfield = document.querySelector("#country");
var $shapefield = document.querySelector("#shape");
var $Searchb = document.querySelector("#search");

//search button, call Searchc function
$Searchb.addEventListener("click", Searchc);

// Set ufoData to data
var ufoData = data;

// createtable function - what creates tbody using data from ufoData
function createtable() {
    $tbody.innerHTML = "";
    for (var i = 0; i < ufoData.length; i++) {
        // Get current fields
        var info = ufoData[i];
        var fields = Object.keys(info);
        // insert new fields in the tbody
        var $row = $tbody.insertRow(i);
        for (var j = 0; j < fields.length; j++) {
            var field = fields[j];
            var $cell = $row.insertCell(j);
            $cell.innerText = info[field];
        }
    }
}

function Searchc() {
    // formating search/filtered data - use trim to remove whitespace & toLowercase functions
    var filterDate = $datefield.value.trim();
    var filterCity = $cityfield.value.trim().toLowerCase();
    var filterState = $statefield.value.trim().toLowerCase();
    var filterCountry = $countryfield.value.trim().toLowerCase();
    var filterShape = $shapefield.value.trim().toLowerCase();
    ufoData = data.filter(function(ufoSighting) {
        var searchDate = ufoSighting.datetime;
        var searchCity = ufoSighting.city.toLowerCase();
        var searchState = ufoSighting.state.toLowerCase();
        var searchCountry = ufoSighting.country.toLowerCase();
        var searchShape = ufoSighting.shape.toLowerCase();
        // If statements for search, filter and empty values
        if (
            (searchDate === filterDate || filterDate === "") &&
            (searchCity === filterCity || filterCity === "") &&
            (searchState === filterState || filterState === "") &&
            (searchCountry === filterCountry || filterCountry === "") &&
            (searchShape === filterShape || filterShape === "")
        ) {
            return true;
        }
        return false;
    });
    createtable();

    // reset input 
    $datefield.value = "";
    $cityfield.value = "";
    $statefield.value = "";
    $countryfield.value = "";
    $shapefield.value = "";
}

// run create table function
createtable();
