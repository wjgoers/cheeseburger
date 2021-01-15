Eat-Da-Burger

Overview

In this assignment, I created a web application where I can log burgers with MySQL, Node, Express, Handlebars and a homemade ORM.

How Eat-Da-Burger Works

Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.

Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page.

This app stores every burger in a database, whether devoured or not.

This is my first assignment using a MVC framework

DB Setup

I have a 'burgers_db' with a 'burgers' table that includes the fields id, burger_name, devoured, and date.

Config Setup

Inside my burger directory, I have a config folder with a 'connection.js' file that connects Node to MySQL. The connection is exported. I have an 'orm.js' file that imports 'connection.js' and defines the methods that will execute the necessary MySQL commands in my controllers:

 * `selectAll()` 
 * `insertOne()` 
 * `updateOne()` 
The ORM object is exported.

Model setup

Inside the burger directory, there is a models folder which has my 'burger.js' file. 'orm.js' is imported into 'burger.js'. Code inside 'burger.js' calls the ORM functions. It is exported at the end of the 'burger.js' file.

Controller setup

Inside the burger directory, there is a controllers folder which has the 'burgers_controller.js' file. Express and 'burger.js' are imported and a 'router' for the app was created and exported.

View setup

Inside the burger directory, there is a folder named views which has my handlebars files.