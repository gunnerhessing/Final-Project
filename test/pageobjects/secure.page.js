const { $ } = require('@wdio/globals')
const Page = require('./page');


class SecurePage extends Page {
  
    get yourAccount () {
        return $('[class="orders-page_empty-view__ebBu_"]');
    }
}

module.exports = new SecurePage();
