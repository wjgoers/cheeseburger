var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burgers = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burgers.selectAll(function(data){
    var hdbrsObj = {
      burgers: data
    };
    console.log(hdbrsObj);
    res.render("index", hdbrsObj);
  })
  // burgers.all(function(data) {
  //   var hbsObject = {
  //     burger: data
  //   };
    // console.log(hbsObject);
    // res.render("index");

    router.post("/api/burgers", function(req, res){
      burgers.insertOne(
        ["burger_names", "devoured"],
        [req.body.burger_names, req.body.devoured],
        function(result){
          res.json({ id: result.insertId });
        }
      );
    });

    router.put("/api/burgers/:id", function(req, res){
      var condition = "id = " + req.params.id;
      console.log("condition", condition);
      burger.updateOne ({ devoured: req.body.devoured }, condition, function(result) {
        if ((result, changedRows === 0)) {
          return res.status(404).end();
        }else{
          res.status(200).end();
        }
      })
    })

    router.delete(condition, function(req, res){
      var condition = "id " + req.params.id;
      console.log("condition", condition);

      burger.deleteOne(condition, function(result){
        if ((result, changedRows === 0)) {
          return res.status(404).end();
        }else{
          res.status(200).end();
        }
      })
    })
  });

  module.exports = routers;
// });

// router.get("/burgers", function(req, res){
//   burger.all(function(data){
//     res.render("index", {burgerData: data})
//   })
// });

// router.post("/api/burgers", function(req, res) {
//   burger.create(["burgers_name", "devoured"], [req.body.burgers_names, req.body.devoured], function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });

// router.put("/api/burgers/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   burger.update(
//     {
//       devoured: req.body.devoured
//     },
//     condition,
//     function(result) {
//       if (result.changedRows === 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       }
//       res.status(200).end();

//     }
//   );
// });

// Export routes for server.js to use.
module.exports = router;