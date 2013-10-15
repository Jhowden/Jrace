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
  if (playa1.lane.children().last().hasClass('end active') || playa2.lane.children().last().hasClass('end active')){
    alert("Someone has won the DEAATHTEHT RACCCE")
  }
}

// TODO: PASS DATA TO AND FROM APP
var playa1
var playa2

$(document).ready(function() {
  playa1 = new Playa("Zack", 65, $('#player1_strip'))
  playa2 = new Playa("John", 76, $('#player2_strip'))

  $(document).on("keyup", function(event){ 
    console.log(event.which)
    playa1.move_forward(event)
    playa2.move_forward(event)
    Winner()
  })
});


