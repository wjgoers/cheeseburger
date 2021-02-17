var connection = require("../config/connection");
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  // column1=value, column2=value2,...
  var arr = [];

  for (var key in ob) {
    arr.push(key + "=" + ob[key]);
  }

  return arr.toString();
}
// var orm = {
//   selectAll: function(table, cb){
//     var dbQuery = "SELECT * FROM " + table + ";";
//     connection.query(dbQuery, function(err, res){
//       if (err) {
//         throw err;
//       }
//       cb(res);
//     })
//   }
// };

function createQmarks(num) {
  var arr = [];
  for(var i = 0; i < num; i++) {
    arr.push("?")
  }
  return arr.toString();
}

function translateSql(obj) {
  var arr = [];
  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if(typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'"
      }
      arr.push(key + "=" + value)
    }
  }
  return arr .toString();
}
// create a variable called orm and export it
// select all query 
var orm = {
  selectAll: function (table, cb) {
    var dbQuery = "SELECT * FROM " + table;
    connection.query(dbQuery, function (err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    })
  },
  // 
  
  // insert query 
  insertOne: function(table, cols, vals, cb) {
    var dbQuery = "INSERT INTO " + table + " (" + cols.toString() + ") " + "VAlUES (" + createQmarks(vals.length) + ") ";

    console.log(dbQuery);
    connection.query(dbQuery, vals, function (err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  }, 

updateOne: function (table, objColVals, condition, cb) {
    var dbQuery = "UPDATE " + table + " SET " + translateSql(objColVals) + " WHERE " + condition;
    console.log(dbQuery);
    connection.query(dbQuery, function (err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },

deleteOne: function(table, condition, cb) {
  var dbQuery = " DELETE FROM " + table + " WHERE " + condition;
  console.log(dbQuery);
  connection.query(dbQuery, vals, function(err, res) {
    if (err) {
      throw err;
    }
    cb(res);
  });
},

// ____-----------------__---__-_---_----_
all: function (tableInput, cb) {
  var queryString = "SELECT * FROM " + tableInput + ";"
  connection.query(queryString, function (err, result) {
    if (err) {
      throw err;
    }
    cb(result);
  });
},
create: function (table, cols, vals, cb) {
  var queryString = "INSERT INTO " + table;

  queryString += " (";
  queryString += cols.toString();
  queryString += ") ";
  queryString += "VALUES (";
  queryString += printQuestionMarks(vals.length);
  queryString += ") ";

  console.log(queryString);

  connection.query(queryString, vals, function (err, result) {
    if (err) {
      throw err;
    }
    cb(result);
  });
},
update: function (table, objColVals, condition, cb) {
  var queryString = "UPDATE " + table;

  queryString += " SET ";
  queryString += objToSql(objColVals);
  queryString += " WHERE ";
  queryString += condition;

  console.log(queryString);
  connection.query(queryString, function (err, result) {
    if (err) {
      throw err;
    }
    cb(result);
  });
}
};

module.exports = orm;