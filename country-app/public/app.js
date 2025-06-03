"use strict";
/**
 * MET CS601 - Assignment 4
 * Country Management System
 * Created by Joel Hernandez Pena
*/
// RainyCountry class that implements the ICountry interface
class RainyCountry {
    // 2-argument constructor: name and rainLevel
    constructor(name, rainLevel) {
        this.name = name;
        this.rainLevel = rainLevel;
    }
    getInfo(element) {
        element.textContent = `${this.name} has a rain level of ${this.rainLevel} inches.`;
        return element;
    }
}
// SnowyCountry class that implements the ICountry interface
class SnowyCountry {
    // 2-argument constructor: name and snowLevel
    constructor(name, snowLevel) {
        this.name = name;
        this.snowLevel = snowLevel;
    }
    getInfo(element) {
        element.textContent = `${this.name} has a snow level of ${this.snowLevel} inches.`;
        return element;
    }
}
// IslandCountry class that implements the ICountry interface
class IslandCountry {
    // 2-argument constructor: name and landSize
    constructor(name, landSize) {
        this.name = name;
        this.landSize = landSize;
    }
    getInfo(element) {
        element.textContent = `${this.name} has a land size of ${this.landSize} square kilometers.`;
        return element;
    }
}
// Sample data
const countries = [
    new RainyCountry("United States", 28),
    new SnowyCountry("Norway", 20),
    new RainyCountry("Brazil", 40),
    new IslandCountry("Japan", 145937),
    new SnowyCountry("Sweden", 30),
    new IslandCountry("Australia", 2968464)
];
// Empty list for storing only SnowyCountry objects
const snowyCountriesList = [];
/**
 * @description - Filters the list of countries (only SnowyCountry)
 * @param - country
 * @returns - SnowyCountry
*/
function isSnowyCountry(country) {
    return country.snowLevel !== undefined; // Type assertion
}
// Executes isSnowyCountry() for each country in the list
for (const country of countries) {
    // Adds SnowyCountry to the list
    if (isSnowyCountry(country)) {
        snowyCountriesList.push(country);
    }
}
// Gets the <div id="output"> container from the index file
const outputDiv = document.getElementById("output");
/**
 * @description - Shows all the countries in ICountry[]
 * @param - nameList, countryList
 * @returns - void
*/
function showCountries(nameList, countryList) {
    // Ensures the <div id="output"> element exists
    if (!outputDiv)
        return;
    // Creates a <h2> element to show the nameList
    const subTitle = document.createElement("h2");
    subTitle.textContent = nameList;
    outputDiv.appendChild(subTitle);
    // Creates a <p> element for each value in the countryList to show the countryList
    countryList.forEach((snowyCountry) => {
        const countryInfo = document.createElement("p");
        outputDiv.appendChild(snowyCountry.getInfo(countryInfo));
    });
}
/**
 * @description - Shows the total annual snow level for all the snowy countries
 * @returns - void
*/
function showAnnualSnow() {
    // Calculates the total annual snow level from the snowyCountriesList
    const totalSnowLevel = snowyCountriesList.reduce((_snowLevel, snowyCountry) => _snowLevel + snowyCountry.snowLevel, 0);
    // Creates a <p> element to show the total annual snow level: id="snow-level"
    const totalSnowInfo = document.createElement("p");
    totalSnowInfo.id = "snow-level";
    totalSnowInfo.textContent = `Total snow level: ${totalSnowLevel} inches.`;
    // Optional property (?) in case there are no snowyCountries in the list
    outputDiv === null || outputDiv === void 0 ? void 0 : outputDiv.appendChild(totalSnowInfo);
}
// Executing all functions
showCountries("All Countries", countries);
showCountries("Snowy Countries", snowyCountriesList);
showAnnualSnow();
