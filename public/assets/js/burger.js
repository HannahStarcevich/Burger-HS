// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".change-devour").on("click", function (event) {
        var id = $(this).data("htmlid");
        var readyToEat = $(this).data("hello");

        var theOpposite = 0;
        if (readyToEat === 0) {
            theOpposite = 1;
        }
        var newBurgerStatus = {
            devoured: theOpposite
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBurgerStatus
        }).then(
            function () {
                console.log("changed status to", newBurgerStatus);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burgerId").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    // $(".delete-burger").on("click", function (event) {
    //     var id = $(this).data("id");

    //     // Send the DELETE request.
    //     $.ajax("/api/burgers/" + id, {
    //         type: "DELETE"
    //     }).then(
    //         function () {
    //             console.log("deleted cat", id);
    //             // Reload the page to get the updated list
    //             location.reload();
    //         }
    //     );
    // });
});