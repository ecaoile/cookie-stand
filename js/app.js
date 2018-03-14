'use strict';

// Access the table that is in the DOM
var storeTable = document.getElementById('stores');

// Access the form so we can attach an event listener
var storeForm = document.getElementById('store-form');

// A few variables we're going to delcare in the beginning
var storeHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var allStores = [];

// A constructor for our store objects
function Store (location, minCust, maxCust, avgCookiesPerSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.totalCookies = 0;
  this.hourlyCookiesArray = [];
  allStores.push(this);
}

// Render the stores in the table
Store.prototype.render = function() {
  // initialize totalCookies to 0
  this.totalCookies = 0;
  // create tr
  var trElement = document.createElement('tr');

  // create th element
  var thElement = document.createElement('th');
  thElement.className = 'salesLoc';

  // create td
  var tdElement = document.createElement('td');

  // give th content
  thElement.textContent = this.location;

  // append th to tr
  trElement.appendChild(thElement);

  // make td for other fields
  for (var i = 0; i < storeHours.length; i++) {
    if (this.hourlyCookiesArray.length < storeHours.length) {
      this.hourlyCookiesCalc = Math.floor((Math.random() * (this.maxCust - this.minCust) + this.minCust) * this.avgCookiesPerSale);
    }
    tdElement = document.createElement('td');
    tdElement.textContent = this.hourlyCookiesCalc;
    this.hourlyCookiesArray.push(this.hourlyCookiesCalc);
    trElement.appendChild(tdElement);
    this.totalCookies += this.hourlyCookiesCalc;
  }

  // make td for daily location total
  tdElement = document.createElement('td');
  tdElement.textContent = this.totalCookies;
  trElement.appendChild(tdElement);

  storeTable.appendChild(trElement);
};

new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

function makeHeaderRow() {
  var headerTrElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = '';
  headerTrElement.appendChild(thElement);

  for (var i = 0; i < storeHours.length; i++) {
    var tdElement = document.createElement('td');
    tdElement.textContent = storeHours[i];
    headerTrElement.appendChild(tdElement);
  }

  // make daily totals cell
  thElement = document.createElement('th');
  thElement.textContent = 'Daily Location Totals';
  headerTrElement.appendChild(thElement);

  storeTable.appendChild(headerTrElement);
}

function makeTotalsRow() {
  var totalOfTotals = 0;
  // cell for Totals: string
  var totalTrElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = 'Totals';
  totalTrElement.appendChild(thElement);

  // cells for totals per hour from all locations combined
  for (var i = 0; i < storeHours.length; i++) {
    var hourlyTotal = 0;
    var tdElement = document.createElement('td');
    for (var j = 0; j < allStores.length; j++) {
      hourlyTotal += allStores[j].hourlyCookiesArray[i];
    }
    tdElement.textContent = hourlyTotal;
    totalOfTotals += hourlyTotal;
    totalTrElement.appendChild(tdElement);
  }

  // cell for total of totals
  tdElement = document.createElement('td');
  tdElement.textContent = totalOfTotals;
  totalTrElement.appendChild(tdElement);

  storeTable.appendChild(totalTrElement);
}

function renderAllStores() {
  for(var i in allStores) {
    allStores[i].render();
  }
}

function addNewStore(event) {
  event.preventDefault();
  var newLoc = event.target.storeLoc.value;
  var newMinCust = event.target.minCust.value;
  var newMaxCust = event.target.maxCust.value;
  var newAvgCookiesPerSale = event.target.avgCookiesPerSale.value;

  new Store(newLoc, newMinCust, newMaxCust, newAvgCookiesPerSale);

  storeTable.innerHTML = '';
  makeHeaderRow();
  renderAllStores();
  makeTotalsRow();
}
/*
var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac', 3, 24, 1.2);
var seaCent = new Store('Seattle Center', 11, 38, 3.7);
var capHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);
*/

// add event listener
storeForm.addEventListener('submit', addNewStore);

// call functions
makeHeaderRow();
renderAllStores();
/*
firstAndPike.render();
seaTac.render();
seaCent.render();
capHill.render();
alki.render();
*/
makeTotalsRow();