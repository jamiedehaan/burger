var connection = require("../config/connection.js");

function questionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

function objToSql(ob) {
  var arr = [];
  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

var orm = {
  selectAll: function (tableInput, cb) {
    var queryS = "SELECT * FROM " + tableInput + ";";
    connection.query(queryS, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne: function (table, cols, vals, cb) {
    var queryS = "INSERT INTO " + table;
    queryS += " (";
    queryS += cols.toString();
    queryS += ") ";
    queryS += "VALUES (";
    queryS += questionMarks(vals.length);
    queryS += ") ";
    connection.query(queryS, vals, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  updateOne: function (table, objColVals, condition, cb) {
    var queryS = "UPDATE " + table;
    queryS += " SET ";
    queryS += objToSql(objColVals);
    queryS += " WHERE ";
    queryS += condition;
    connection.query(queryS, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

module.exports = orm;