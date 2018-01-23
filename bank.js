const Account = require('./account.js');

const Bank = function(name){
  this.name = name;
  this.accounts = [];
}

Bank.prototype.addAccount = function(account){
  this.accounts.push(account);
}

Bank.prototype.findByName = function(name){
  for(let account of this.accounts){
    if(account.name === name){
      return account;
    }
  }
  return null;
}

Bank.prototype.largestAccount = function(){
  var maxAccount = this.accounts[0];
  for(let account of this.accounts){
    if(account.value > maxAccount.value){
      maxAccount = account;
    }
  }
  return maxAccount;
}

Bank.prototype.totalValue = function(){
  var total = 0;
  for(let account of this.accounts){
    total += account.value;
  }
  return total;
}

Bank.prototype.averageValue = function(){
  var average = (this.totalValue()/ this.accounts.length);
  return average;
}

Bank.prototype.totalByType = function(type){
  var typeTotal = 0;
  for(let account of this.accounts){
    if(account.type === type ){
      typeTotal += account.value;
    }
  }
  return typeTotal;
}

Bank.prototype.namesByType = function(type){
  var typeAccounts =  this.accounts.filter(account => account.type === type);
  var names = [];
  for(let account of typeAccounts){
    names.push(account.name);
  }
  return names;

  // var names = [];
  // for(let account of this.accounts){
  //   if(account.type === type){
  //     names.push(account.name);
  //   }
  // }
  // names.sort();
  // return names;
}


module.exports = Bank;
