$(document).ready(function() {

  // $("ul[id='marker-list']").on("click", function(){
  //   console.log(target)


  // $("li:contains('Hello Kitty')").text('New Text');
  //  $("li:nth-child(4)").css("color", "red")
   // $("li:nth-child(4)").html("new Text")

//  $("ul").click(handler)

  $('input[id="address_input"]').hover(function(){
      $(this).attr('placeholder', 'ie. 633 Folsom St, San Francisco')
    },
    function(){
      $(this).attr('placeholder', 'Where do you want to explore?')
  });
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

