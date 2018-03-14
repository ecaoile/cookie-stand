'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var allStores = [];
var storeTable = document.getElementById('stores');

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

  // create td
  var tdElement = document.createElement('td');

  // give th content
  thElement.textContent = this.location;

  // append th to tr
  trElement.appendChild(thElement);

  // make td for other fields
  for (var i = 0; i < hours.length; i++) {
    this.hourlyCookiesCalc = Math.floor((Math.random() * (this.maxCust - this.minCust) + this.minCust) * this.avgCookiePerSale);
    tdElement = document.createElement('td');
    tdElement.textContent = this.hourlyCookiesCalc;
    this.hourlyCookiesArray.push(this.hourlyCookiesCalc);
    trElement.appendChild(tdElement);
    this.totalCookies += this.hourlyCookiesCalc;
  }
  tdElement.textContent = this.totalCookies;
  trElement.appendChild(tdElement);
  storeTable.appendChild(trElement);
};

function makeHeaderRow() {
  var headerTrElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = '';
  headerTrElement.appendChild(thElement);

  for (var i = 0; i < hours.length; i++) {
    var tdElement = document.createElement('td');
    tdElement.textContent = hours[i];
    headerTrElement.appendChild(tdElement);
  }
  storeTable.appendChild(headerTrElement);
}

function makeTotalsRow() {
  // cell for Totals: string
  var totalTrElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = 'Totals';
  totalTrElement.appendChild(thElement);
  // cells for totals per each hour
  for (var i = 0; i < hours.length; i++) {
    var hourlyTotal = 0;
    var tdElement = document.createElement('td');
    for (var j = 0; j < allStores.length; j++) {
      hourlyTotal += allStores[j].hourlyCookiesArray[i];
    }
    tdElement.textContent = hourlyTotal;
    totalTrElement.appendChild(tdElement);
  }

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
/*
  this.hourlyCookies = function() {
    return Math.floor((Math.random() * (this.maxCust - this.minCust) + this.minCust) * this.avgCookiePerSale);
  };  
  this.showSales = function() {
    var shopContainer = document.getElementById('shop1');
    var totalCookies = 0;
    for (var i = 0; i < hours.length; i++) {
      var hourElement = document.createElement('li');
      var currentHourCookies = this.hourlyCookies();
      hourElement.textContent = hours[i] + ': ' + currentHourCookies;
      shopContainer.appendChild(hourElement);
      totalCookies += currentHourCookies;
    }
    var totalElement = document.createElement('li');
    totalElement.textContent = 'Total: ' + totalCookies;
    shopContainer.appendChild(totalElement);
  };*/
/*
var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);
firstAndPike.hourlyCookies();
firstAndPike.showSales();

var pikeShop = {
  location: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookiePerSale: 6.3,
  hourlyCookies: function() {
    return Math.floor((Math.random() * (this.maxCust - this.minCust) + this.minCust) * this.avgCookiePerSale);
  },

  showSales: function() {
    var shopContainer = document.getElementById('shop1');
    var totalCookies = 0;
    for (var i = 0; i < hours.length; i++) {
      var hourElement = document.createElement('li');
      var currentHourCookies = this.hourlyCookies();
      hourElement.textContent = hours[i] + ': ' + currentHourCookies;
      shopContainer.appendChild(hourElement);
      totalCookies += currentHourCookies;
    }
    var totalElement = document.createElement('li');
    totalElement.textContent = 'Total: ' + totalCookies;
    shopContainer.appendChild(totalElement);
  }
};

var seaTacShop = {
  location :'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookiePerSale: 1.2,

  hourlyCookies: function() {
    return Math.floor((Math.random() * (this.maxCust - this.minCust) + this.minCust) * this.avgCookiePerSale);
  },

  showSales: function() {
    var shopContainer = document.getElementById('shop2');
    var totalCookies = 0;
    for (var i = 0; i < hours.length; i++) {
      var hourElement = document.createElement('li');
      var currentHourCookies = this.hourlyCookies();
      hourElement.textContent = hours[i] + ': ' + currentHourCookies;
      shopContainer.appendChild(hourElement);
      totalCookies += currentHourCookies;
    }
    var totalElement = document.createElement('li');
    totalElement.textContent = 'Total: ' + totalCookies;
    shopContainer.appendChild(totalElement);
  }
};

var seattleCenterShop = {
  location :'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookiePerSale: 3.7,

  hourlyCookies: function() {
    return Math.floor((Math.random() * (this.maxCust - this.minCust) + this.minCust) * this.avgCookiePerSale);
  },

  showSales: function() {
    var shopContainer = document.getElementById('shop3');
    var totalCookies = 0;
    for (var i = 0; i < hours.length; i++) {
      var hourElement = document.createElement('li');
      var currentHourCookies = this.hourlyCookies();
      hourElement.textContent = hours[i] + ': ' + currentHourCookies;
      shopContainer.appendChild(hourElement);
      totalCookies += currentHourCookies;
    }
    var totalElement = document.createElement('li');
    totalElement.textContent = 'Total: ' + totalCookies;
    shopContainer.appendChild(totalElement);
  }
};

var capitolHillShop = {
  location :'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookiePerSale: 2.3,

  hourlyCookies: function() {
    return Math.floor((Math.random() * (this.maxCust - this.minCust) + this.minCust) * this.avgCookiePerSale);
  },

  showSales: function() {
    var shopContainer = document.getElementById('shop4');
    var totalCookies = 0;
    for (var i = 0; i < hours.length; i++) {
      var hourElement = document.createElement('li');
      var currentHourCookies = this.hourlyCookies();
      hourElement.textContent = hours[i] + ': ' + currentHourCookies;
      shopContainer.appendChild(hourElement);
      totalCookies += currentHourCookies;
    }
    var totalElement = document.createElement('li');
    totalElement.textContent = 'Total: ' + totalCookies;
    shopContainer.appendChild(totalElement);
  }
};

var alkiShop = {
  location :'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookiePerSale: 4.6,

  hourlyCookies: function() {
    return Math.floor((Math.random() * (this.maxCust - this.minCust) + this.minCust) * this.avgCookiePerSale);
  },

  showSales: function() {
    var shopContainer = document.getElementById('shop5');
    var totalCookies = 0;
    for (var i = 0; i < hours.length; i++) {
      var hourElement = document.createElement('li');
      var currentHourCookies = this.hourlyCookies();
      hourElement.textContent = hours[i] + ': ' + currentHourCookies;
      shopContainer.appendChild(hourElement);
      totalCookies += currentHourCookies;
    }
    var totalElement = document.createElement('li');
    totalElement.textContent = 'Total: ' + totalCookies;
    shopContainer.appendChild(totalElement);
  }
};

//pikeShop.showSales();
seaTacShop.showSales();
seattleCenterShop.showSales();
capitolHillShop.showSales();
alkiShop.showSales();
*/