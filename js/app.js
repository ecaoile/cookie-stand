'use strict';

var storeHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var allStores = [];
var storeTable = document.getElementById('stores');
var totalOfTotals = 0;
function Store (location, minCust, maxCust, avgCookiePerSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiePerSale = avgCookiePerSale;
  this.totalCookies = 0;
  this.hourlyCookiesArray = [];
  allStores.push(this);
}

Store.prototype.render = function() {
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
    this.hourlyCookiesCalc = Math.floor((Math.random() * (this.maxCust - this.minCust) + this.minCust) * this.avgCookiePerSale);
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

var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac', 3, 24, 1.2);
var seaCent = new Store('Seattle Center', 11, 38, 3.7);
var capHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

makeHeaderRow();
firstAndPike.render();
seaTac.render();
seaCent.render();
capHill.render();
alki.render();
makeTotalsRow();