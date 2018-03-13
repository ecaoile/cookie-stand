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
    this.hourlyCookies = Math.floor((Math.random() * (this.maxCust - this.minCust) + this.minCust) * this.avgCookiePerSale);
    tdElement = document.createElement('td');
    tdElement.textContent = this.hourlyCookies;
    trElement.appendChild(tdElement);
    this.totalCookies += this.hourlyCookies;
  }
  storeTable.appendChild(trElement);

};

var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac', 3, 24, 1.2);
var seaCent = new Store('Seattle Center', 11, 38, 3.7);

firstAndPike.render();
seaTac.render();
seaCent.render();
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