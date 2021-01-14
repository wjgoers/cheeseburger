//button on click event that submits the burger
//button on click event that devoures the burger

$(function () {
    $(".create-form").on("submit", function(event){
        event.preventDefault();

        var newBurger = { 
            burger_names: $("#newburger").val().trim(), devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Added a new Burger");
            location.reload();  
        })
    })
    $(".eatburger").ob("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    var devouredState = {
        devoured: 1
    };
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState
    }) .then(function(){
        console.log("Burger devoured");
        location.reload();
    })
    })
})


$(function() {})