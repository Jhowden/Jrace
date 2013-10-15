function Playa(name, key, lane){
  this.name = name;
  this.key = key;
  this.lane = lane;
}

Playa.prototype.move_forward = function(an_event){
  if (this.key == an_event.which ){
    this.lane.find('td.active').removeClass('active').next().addClass('active')
  }
}

function Game(playa1, playa2){
  this.playa1 = playa1
  this.playa2 = playa2
}

function Winner() {
  if (playa1.lane.children().last().hasClass('end active')) {
     the_winner = playa1
      alert("NOONE EXCEPT " + the_winner.name + " wins at DEAATHTEHT RACCCE")
      $(document).unbind("keyup")
        var data = {first: playa1.name, second: playa2.name, winner: the_winner.name }
  $.post('/results', data, function(response){
    ('.racer_table').after(response)
  })
  }
  if (playa2.lane.children().last().hasClass('end active')) {
    the_winner = playa2  
      alert("NOONE EXCEPT " + the_winner.name + " wins at DEAATHTEHT RACCCE")
      $(document).unbind("keyup")
        var data = {first: playa1.name, second: playa2.name, winner: the_winner.name }
  $.post('/results', data, function(response){
    ('.racer_table').after(response)
  })
  }

}

// TODO: PASS DATA TO AND FROM APP
var the_winner
var playa1
var playa2

$(document).ready(function() {
  playa1 = new Playa("J-Howden", 65, $('#player1_strip'))
  playa2 = new Playa("Zach Diesel", 76, $('#player2_strip'))

  $(document).on("keyup", function(event){ 
    console.log(event.which)
    playa1.move_forward(event)
    playa2.move_forward(event)
    Winner()
  })
});


