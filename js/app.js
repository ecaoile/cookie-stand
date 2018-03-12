'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var shop1 = {
  shopLocation: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookiePerSale: 6.3,

  cookieRate: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  },

  showSales: function() {
    var shop1Container = document.getElementById('shop1');
    for (var i = 0; i < hours.length; i++) {
      var hourElement = document.createElement('li');
      hourElement.textContent = hours[i] + ': ' + Math.round(this.cookieRate() * this.avgCookiePerSale);
      shop1Container.appendChild(hourElement);
    }
  }
};

var shop2 = {
  shopLocation :'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookiePerSale: 1.2,

  cookieRate: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  },

  showSales: function() {
    var shop2Container = document.getElementById('shop2');
    for (var i = 0; i < hours.length; i++) {
      var hourElement = document.createElement('li');
      hourElement.textContent = hours[i] + ': ' + Math.round(this.cookieRate() * this.avgCookiePerSale);
      shop2Container.appendChild(hourElement);
    }
  }
};

var shop3 = {
  shopLocation :'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookiePerSale: 3.7,

  cookieRate: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  },

  showSales: function() {
    var shop3Container = document.getElementById('shop3');
    for (var i = 0; i < hours.length; i++) {
      var hourElement = document.createElement('li');
      hourElement.textContent = hours[i] + ': ' + Math.round(this.cookieRate() * this.avgCookiePerSale);
      shop3Container.appendChild(hourElement);
    }
  }
};

var shop4 = {
  shopLocation :'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookiePerSale: 2.3,

  cookieRate: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  },

  showSales: function() {
    var shop4Container = document.getElementById('shop4');
    for (var i = 0; i < hours.length; i++) {
      var hourElement = document.createElement('li');
      hourElement.textContent = hours[i] + ': ' + Math.round(this.cookieRate() * this.avgCookiePerSale);
      shop4Container.appendChild(hourElement);
    }
  }
};

var shop5 = {
  shopLocation :'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookiePerSale: 4.6,

  cookieRate: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  },

  showSales: function() {
    var shop5Container = document.getElementById('shop5');
    for (var i = 0; i < hours.length; i++) {
      var hourElement = document.createElement('li');
      hourElement.textContent = hours[i] + ': ' + Math.round(this.cookieRate() * this.avgCookiePerSale);
      shop5Container.appendChild(hourElement);
    }
  }
};

shop1.showSales();
shop2.showSales();
shop3.showSales();
shop4.showSales();
shop5.showSales();