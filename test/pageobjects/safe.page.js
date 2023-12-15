const { $ } = require('@wdio/globals')
const Page = require('./URL.js');


class SecurePage extends Page {
  
    get yourAccount () {
        return $('[class="orders-page_empty-view__ebBu_"]');
    }
    get mensHeader () {
        return $('[id="carousel-subtitle"]');
    }

    get newReleases () {
        return $('[class="product-filters_title__xGijI"]');
    }
 
    get seamlessShirt () {
        return $('[class="product-information_title__Wx52B"]');
    }


    get loggedIn() {
        return $('[data-user-logged-in="true"]');
    }
 
    
}

module.exports = new SecurePage();
