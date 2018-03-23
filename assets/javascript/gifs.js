
    var p, animalImage, animalDiv;

    var interests = ["Music", "Bodybuilding",  "R&B", "Singing", "Cars", "Fitness", "Food", "Relaxation", "HGTV"];

for(i = 0; i< interests.length; i++){
    var b = $('<button>' + interests[i] + '</button>')

    b.val(interests[i]);

    b.attr("data-element", interests[i]);

    b.addClass("button");


    $('#interest-buttons').append(b);

}

$('#submit').on("click", function(){

  

    var newint = $('#user-interest').val().trim();

    if(newint !== ""){


    interests.push(newint);

    //console.log(interests);

    var btn = $('<button>' + newint + '</button>')

    b.val(newint);

    btn.addClass("button");

    btn.attr("data-element", newint);

    $('#interest-buttons').append(btn);

    $('#user-interest').val("");

    }

  
})
    
    $(document).on("click", ".button", function() {

        console.log($(this).attr("data-element"));
    
      $('#gifs-appear-here').empty();
      var animal = $(this).attr("data-element");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
  
        //console.log(response);

        var results = response.data;

         for (var i = 0; i < results.length; i++) {

           /*var*/ animalDiv = $("<div>");

           /*var*/ p = $('<p>');

           p.text("Rating: " + results[i].rating);

           /*var*/ animalImage = $("<img>");

           animalImage.attr("src", results[i].images.fixed_height.url);

           animalImage.attr({'data-state':'animate'});

           animalImage.addClass("gif");

           //console.log(results[i].images.fixed_height.url);

           animalImage.attr("data-still", results[i].images.fixed_height_still.url);

           animalImage.attr("data-animate", results[i].images.fixed_height.url);

           //console.log(results[i].images.fixed_height_still.url);
           console.log(animalImage);

           animalDiv.append(p);

           animalDiv.append(animalImage);

           $('#gifs-appear-here').append(animalDiv);

         }

      });
    });

    $(document).on("click", "img.gif", function() {
      
    console.log("imaged clicked");
    console.log($(this));
    console.log($(this).attr('data-state'));

    if($(this).attr('data-state') === "animate"){

        $(this).attr("src", $(this).attr('data-still'));
        $(this).attr("data-state", "still");

        console.log($(this).attr("data-state"));

        //console.log("image property updated from animate");
    }else if($(this).attr('data-state') === 'still'){

        //console.log("state is still");

        $(this).attr("src", $(this).attr('data-animate'));
        $(this).attr("data-state", "animate");

        console.log($(this).attr("data-state"));

        //console.log("image property updated from still")
    }
 
    });