var orm = require("../config/orm.js")

var burgers = {
selectAll: function(cb) {
  orm.selectAll("burgers", function(res) {
    cb(res);
  });
},

insertOne: function(cols, vals, cb) {
  orm.selectAll("burgers", cols, vals, function(res) {
    cb(res);
  });
},

updateOne: function(objColsVals, condition, cb) {
  orm.selectAll("burgers", objVolVals, condition, function(res) {
    cb(res);
  });
},

deleteOne: function(condition, cb) {
  orm.selectAll("burgers", condition, function(res) {
    cb(res);
  });
}
};

module.exports = burgers;


// var burger = {
//   all: function (cb) {
//     orm.all("burgers", function (res) {
//       cb(res)
//     });
//   },

//   create: function (name, cb) {
//     orm.create("burgers", ["burger_name", "devoured"], [name, false], cb)
//   },

//   update: function(id, cb) {
//     orm.update("burgers", {devoured: true}, "id=" + id, cb)   
//   },  
// }
// module.exports = burger;

