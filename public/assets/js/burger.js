//button on click event that submits the burger
//button on click event that devoures the burger

$(document).ready (function() {
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_names: $("#newburger").val().trim(), devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("Added a new Burger");
            location.reload();
        })
    })

    $(".eatburger").on("click", function (event) {
        event.preventDefault();
        var id = $(this).val();
        console.log(id)
        // var devouredState = true 
        $.ajax({
            method: "PUT",
            url: "/api/burgers/" + id
        }).then(function (data) {
            console.log("Burger devoured", data);
            location.reload();
        })
    })

    $(".trashburger").on("click", function(event){
        event.preventDefault();
        var id = $(this).data("id");

        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
    });
});