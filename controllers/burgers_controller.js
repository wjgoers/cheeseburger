var express = require("express");
// const burger = require("../../../fullstack-ground/01-Class-Content/13-MVC/02-Homework/Main/BurgerSolution/models/burger.js");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burgers = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  res.redirect("/burgers")
  // burgers.selectAll(function(data){
  //   var hdbrsObj = {
  //     burgers: data
  //   };
  //   console.log(hdbrsObj);
  //   res.render("index", hdbrsObj);
  });
  router.get("/burgers", function(req, res) {
    burgers.selectAll(function(burgerDBData) {
      console.log("heres the get routes data", burgerDBData);
      res.render("index", {burgers_name: burgerDBData})
    })
  })
  router.post("/burgers/create", function(req, res) {
    console.log("req.body", req.body.burgers_name)
    // takes the request object using it as input for burger.addBurger
    burgers.create(req.body.burgers_name, function(result) {
      // wrapper for orm.js that using MySQL insert callback will return a log to console,
      // render back to index with handle
      console.log(result);
      res.redirect("/");
    });
  });
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
    router.put("/api/burgers/:id", function(req, res) {
      console.log("log in the controller",req.params.id)
      burgers.update(req.params.id, function(result) {
        console.log(result)
        res.sendStatus(200);
      })
    })
    // router.put("/api/burgers/:id", function(req, res){
    //   burgers.updateOne(req.params.id, function(result){
    //     console.log(result)
    //     res.sendStatus(200)
    //   })

      // var condition = "id = " + req.params.id;
      // console.log("condition", condition);
      // burger.updateOne ({ devoured: req.body.devoured }, condition, function(result) {
      //   if ((result, changedRows === 0)) {
      //     return res.status(404).end();
      //   }else{
      //     res.status(200).end();
      //   }
      // })
    // })

    // router.delete(condition, function(req, res){
    //   var condition = "id " + req.params.id;
    //   console.log("condition", condition);

    //   burger.deleteOne(condition, function(result){
    //     if ((result, changedRows === 0)) {
    //       return res.status(404).end();
    //     }else{
    //       res.status(200).end();
    //     }
    //   })
    // })
  // });

  module.exports = router;
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
