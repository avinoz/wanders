
$(document).ready(function() {

// ###### OPENING PAGE

  $('div[id="open_page"]').click(function(e){
    e.preventDefault()
    $(this).slideUp('slow')
  })

// ###### LOGIN/OUT

  $("form[name='login']").on("submit", function(e){
    e.preventDefault()
    var usr_input= $(this).serialize();

    $.ajax({
      url: "/login",
      method: "post",
      data: usr_input
    }).done(function(msg){
      var response = JSON.parse(msg);
      console.log(msg);
      if (response.verification == true) {
        $('div[id="logout_form"]').fadeIn('fast')
        $('a[id="geolocate"]').fadeIn('fast')
        $('form[name="login"]').fadeOut('fast')
        $('input[name="phone_num"]').fadeOut('fast', function(){
          $(this).val($('this').val() + 'value="4159751559"');
        })
      } else {
        $("div[id='error']").fadeIn('fast')
      }
    })
  });


  $("form[name=logout]").click(function(e){
    e.preventDefault()
    $("button").fadeOut('fast')
    // $('form[name="login"]').fadeIn('fast')
    // $('input[name="phone_num"]').fadeIn('fast')
  })

// ###### TWILIO

  $('form[name="textmsg"]').submit(function(e){
    e.preventDefault()

    var usr_input = $(this).serialize();
    $.ajax({
      url: "/textmsg",
      method: "POST",
      data: usr_input
    }).done(function(msg){
      var response = JSON.parse(msg);
      if (response.msg == "valid") {
        $('div[id="textsent"]').fadeIn('fast')
      } else {
        $('div[id="invalid_num"]').fadeIn('fast')
      }
    })
  })

// ###### FADEOUT POPUPS

  $('body').click(function(e){
    e.preventDefault
    $('div[id="invalid_num"]').fadeOut('fast')
    $('div[id="textsent"]').fadeOut('fast')
    $('#error').fadeOut('fast')
  })
  // $("button[class='bold']").click(function(){
  //   $('#error').fadeOut('fast')
  //   $('#textsent').fadeOut('fast')
  // })

});

