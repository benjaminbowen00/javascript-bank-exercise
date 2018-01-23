const assert  = require('assert');
const Account = require('../account.js');
const Bank = require('../bank.js');


describe('Bank', function(){

  let account;
  let account2;
  let account3;
  let account4;
  let bank;

  beforeEach(function(){
    account = new Account("Ben", 1000, "savings");
    account2 = new Account("Matt", 2000, "credit");
    account3 = new Account("Keith", 5000, "credit");
    account4 = new Account("Upul", 4000, "savings")

    bank = new Bank("Barclays");
    bank.addAccount(account);
    bank.addAccount(account2);
    bank.addAccount(account3);
    bank.addAccount(account4);
  })

  it('can add account to bank', function(){
    assert.strictEqual(bank.accounts.length, 4);
  })

  it('can get account by name', function(){
    assert.strictEqual(bank.findByName("Matt"), account2);
  })

  it('can get largest account', function(){
    assert.strictEqual(bank.largestAccount(), account3);
  })

  it('can get totalAccountsValue', function(){
    assert.strictEqual(bank.totalValue(), 12000);
  })

  it('can get averageValue', function(){
    assert.strictEqual(bank.averageValue(), 3000);
  })

  it('can get total for type', function(){
    assert.strictEqual(bank.totalByType("savings"), 5000);
  })

  it('can get names by account type', function(){
    assert.deepEqual(bank.namesByType("savings"), ["Ben", "Upul"]);
  })






})
