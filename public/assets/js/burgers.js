$(function () {
    $(".edit").on("click", function (event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newDevoured");
        var newDevouredStatus = {
            devoured: 1
        };
        $.ajax("/api/devoured/" + id, {
            type: "PUT",
            data: newDevouredStatus
        }).then(
            function () {
                location.reload();
            }
        );
    });
    $(".form").on("submit", function (event) {
        event.preventDefault();
        var newB = {
            burger_name: $("#burgerName").val().trim()
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newB
        }).then(
            function () {
                location.reload();
            }
        );
    });
});