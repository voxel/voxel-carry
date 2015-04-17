
var Inventory = require('inventory');

module.exports = function(game, opts) {
  return new Carry(game, opts);
};

function Carry(game, opts) {
  opts = opts || {};
  opts.inventoryWidth = opts.inventoryWidth || 10;
  opts.inventoryRows = opts.inventoryRows || 4;

  this.inventory = new Inventory(opts.inventoryWidth, opts.inventoryRows);
}
