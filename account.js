const Account = function(name, value, type){
  this.name = name;
  this.value = value;
  this.type = type;
}


Account.prototype.add = function(amount){
  this.value += amount;
}

module.exports = Account;
