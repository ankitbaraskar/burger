$(function () {

    $(".devour").on("click",function(event) {
        let id = $(this).attr("data-id");
        let burgerName = $(this).attr("data-name");

        let intID = parseInt(id);

        let burgerObject = {
            id:intID,
            name:burgerName,
            devouredTrue:true
        };

        console.log(burgerObject);

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: burgerObject
          }).then(
            function() {
              console.log(`${burgerName} was devoured`);
              // Reload the page to get the updated list
              location.reload();
            }
          );
    });

});