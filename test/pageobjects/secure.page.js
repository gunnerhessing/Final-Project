const { $ } = require('@wdio/globals')
const Page = require('./page');


class SecurePage extends Page {
  
    get yourAccount () {
        return $('[class="page-title_title__voXOX"]');
    }
}

module.exports = new SecurePage();
