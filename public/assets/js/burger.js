//button on click event that submits the burger
//button on click event that devoures the burger

$(document).ready (function() {
    // $(".create-form").on("submit", function (event) {
    //     event.preventDefault();

    //     var newBurger = {
    //         burgers_name: $("#newBurger").val().trim(), 
    //         devoured: false
    //     };
    //     console.log(newBurger)

    //     $.ajax("/api/burgers", {
    //         type: "POST",
    //         data: newBurger
    //     }).then(function () {
    //         console.log("Added a new Burger" );
    //         location.reload();
    //     })
    // })
    $(".create").on("click", function(e) {
        e.preventDefault();
        let burgerName = {burgers_name: $("#newBurger").val()};
        console.log("we clicked and grabbed:", burgerName);
        $.ajax("/burgers/create", {
            type: "POST",
            data: burgerName
        }).then(function(data) {
            location.reload();
        })

    })

    $(".eatburger").on("click", function (event) {
        event.preventDefault();
        var id = $(this).val();
        console.log("front end id grab",id)
        // var devouredState = true 
        $.ajax({
            method: "PUT",
            url: "/api/burgers/" + id
        }).then(function (data) {
            console.log("Burger devoured", data);
            location.reload();
        })
    })

    // $(".trashburger").on("click", function(event){
    //     event.preventDefault();
    //     var id = $(this).data("id");

    //     $.ajax({
    //         type: "DELETE",
    //         url: "/api/burgers/" + id
    //     }).then(location.reload());
    // });
});