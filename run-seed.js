(function (){
  var Seed = require('./config/seed');

  var seed = new Seed({});
  return seed.runSeeds();
})();
