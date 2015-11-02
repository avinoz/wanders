$(document).ready(function() {

  // $("ul[id='marker-list']").on("click", function(){
  //   console.log(target)


  // $("li:contains('Hello Kitty')").text('New Text');
  //  $("li:nth-child(4)").css("color", "red")
   // $("li:nth-child(4)").html("new Text")

  $("ul").click(handler)

});

function handler(event) {
  var target = $(event.target);
  if ( target.is( "li" ) ) {
    // target.children().toggle();
    target.css("color", "orange")

    // var test =hash.find(target)
    // console.log(test)
  }
}

// var hash = {"Hello Kitty":"link to hello", "Thai food": "link to thai"}