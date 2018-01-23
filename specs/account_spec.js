const assert = require('assert');
const Account = require('../account.js');

describe('Account', function(){
  let account;

  beforeEach(function(){
    account = new Account("Ben", 1000, "savings");
  })

  it('can see amount', function(){
    assert.strictEqual(account.value, 1000);
  })

  it('can add to account', function(){
    account.add(100);
    assert.strictEqual(account.value, 1100);
  })





})
