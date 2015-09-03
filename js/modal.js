$(document).ready(function() {
    checkName();
    toggleFields(); //call this first so we start out with the correct visibility depending on the selected form values
   //this will call our toggleFields function every time the selection value of our underAge field changes
    $("#plus1").change(function() { toggleFields(); });
    $("#plus2").change(function() { toggleFields(); });
    $("#plus3").change(function() { toggleFields(); });
    $("#plus4").change(function() { toggleFields(); });
    
    $("#name").change(function() { checkName(); });

    $("#submit-button").submit(function() {
      
    });
});
//this toggles the visibility of our parent permission fields depending on the current selected value of the underAge field
function toggleFields()
{
    if ($("#plus1").prop('checked')) {
      $("#plus1First").show();
    }
    else {
      $("#plus1First").hide();
    }
    
    if ($("#plus2").prop('checked')) {
      $("#plus2First").show();
    }
    else {
      $("#plus2First").hide();
    }
    
    if ($("#plus3").prop('checked')) {
      $("#plus3First").show();
    }
    else {
      $("#plus3First").hide();
    }
    
    if ($("#plus4").prop('checked')) {
      $("#plus4First").show();
    }
    else {
      $("#plus4First").hide();
    }
}

var theMatch = {};
theMatch.Guests = 0;

function checkName()
{
  var guests = [{"Name":"Ellen Lepore","Guests":0},
{"Name":"Erin Coyne","Guests":0},
{"Name":"Lauren Yuknis","Guests":0},
{"Name":"Jenna Pederson","Guests":0},
{"Name":"Becca Martin","Guests":0},
{"Name":"Danielle Giordanella","Guests":0},
{"Name":"Melissa Brachfield","Guests":0},
{"Name":"Rachel Nash","Guests":0},
{"Name":"Linda Maggiore ","Guests":0},
{"Name":"Mary Simioli","Guests":0},
{"Name":"Travis Moran","Guests":0},
{"Name":"Jess Talini","Guests":0},
{"Name":"Erin Bile","Guests":0},
{"Name":"Betty Cheever","Guests":0},
{"Name":"Kevin Malizia","Guests":0},
{"Name":"Mary Najarian","Guests":0},
{"Name":"Billy Adams","Guests":0},
{"Name":"Madalyn Hull","Guests":0},
{"Name":"Jonathan Hull","Guests":0},
{"Name":"Kristin Hull","Guests":0},
{"Name":"Kelly Najarian ","Guests":0},
{"Name":"Sis Been","Guests":0},
{"Name":"Rich Grace","Guests":0},
{"Name":"Colt Hitchcock","Guests":0},
{"Name":"Monica Graff","Guests":0},
{"Name":"Steve Lynch","Guests":0},
{"Name":"Becky Morrissey","Guests":0},
{"Name":"Robert Najarian","Guests":0},
{"Name":"Hannah Cameron","Guests":0},
{"Name":"Laura Stewart","Guests":0},
{"Name":"Brad Woods","Guests":0},
{"Name":"Kristin Brant","Guests":0},
{"Name":"Jeanette Cruse","Guests":0},
{"Name":"Connor Miner","Guests":0},
{"Name":"Brynn Hussey","Guests":1},
{"Name":"Jeff Speroni","Guests":1},
{"Name":"Kevin Miller","Guests":1},
{"Name":"Julia Been","Guests":1},
{"Name":"Lauren Hammang","Guests":1},
{"Name":"Rush Hannigan","Guests":1},
{"Name":"Stephen Moran","Guests":1},
{"Name":"Laureen Moran","Guests":1},
{"Name":"Michelle Pomar","Guests":1},
{"Name":"Brian Rouch","Guests":1},
{"Name":"Terri Gedaro","Guests":1},
{"Name":"Jimmy Gedaro","Guests":1},
{"Name":"Marsha Rowe","Guests":1},
{"Name":"Doug Rowe","Guests":1},
{"Name":"Cheryl Minardi","Guests":1},
{"Name":"Frank Minardi","Guests":1},
{"Name":"Tim Cheever","Guests":1},
{"Name":"Kim Cheever","Guests":1},
{"Name":"Steve Najarian","Guests":1},
{"Name":"Emmanuelle Najarian","Guests":1},
{"Name":"Terry Philbrook","Guests":1},
{"Name":"Marilyn Philbrook","Guests":1},
{"Name":"Lisa Ritchie","Guests":1},
{"Name":"Marshall Fox","Guests":1},
{"Name":"Annette Hull","Guests":1},
{"Name":"Margaret Hull","Guests":1},
{"Name":"Rob Hull","Guests":1},
{"Name":"Mary Jo Hull","Guests":1},
{"Name":"Robbie Hull","Guests":1},
{"Name":"Tandra Hull","Guests":1},
{"Name":"Ivan Perkins","Guests":1},
{"Name":"Barbara Perkins","Guests":1},
{"Name":"Barbara Pru'Hommes","Guests":1},
{"Name":"Gerry Pru'Hommes","Guests":1},
{"Name":"Kim Najarian","Guests":1},
{"Name":"John Najarian","Guests":1},
{"Name":"Jacklyn Malizia","Guests":1},
{"Name":"Jimmy Malizia","Guests":1},
{"Name":"Patty Ayers","Guests":1},
{"Name":"Steve Ayers","Guests":1},
{"Name":"Cathy Moree","Guests":1},
{"Name":"John Moree","Guests":1},
{"Name":"Dorothy Graves","Guests":1},
{"Name":"Carol Graves","Guests":1},
{"Name":"Samantha Segar","Guests":1},
{"Name":"Greg Norman","Guests":1},
{"Name":"Hannah Eckert","Guests":1},
{"Name":"Cameron Eckert","Guests":1},
{"Name":"Lynn Acton","Guests":1},
{"Name":"Scott Acton","Guests":1},
{"Name":"Kenny Hagan","Guests":1},
{"Name":"Dorris Hagan","Guests":1},
{"Name":"Steven Boynton","Guests":1},
{"Name":"June Boynton","Guests":1},
{"Name":"Gilbert Castro","Guests":1},
{"Name":"Georgia-Fay Castro","Guests":1},
{"Name":"Jayne Bascetta","Guests":1},
{"Name":"Scott Delemos","Guests":1},
{"Name":"Michelle Junga-Murphy","Guests":1},
{"Name":"Sean Murphy","Guests":1},
{"Name":"Amy McClain","Guests":1},
{"Name":"John McClain","Guests":1},
{"Name":"Julie Norton","Guests":1},
{"Name":"Ed Norton","Guests":1},
{"Name":"Jaclynn Bess","Guests":1},
{"Name":"Radley Bess","Guests":1},
{"Name":"Chandler Miler","Guests":1},
{"Name":"Eric Rackley","Guests":1},
{"Name":"Shane Landrum","Guests":1},
{"Name":"Tony Beard","Guests":1},
{"Name":"James Joy","Guests":1},
{"Name":"Perry Spyropolis","Guests":1},
{"Name":"Sherry Spyropolis","Guests":1},
{"Name":"Forest Albaugh","Guests":1},
{"Name":"Kyle Hubbard","Guests":1},
{"Name":"Brandy Hubbard","Guests":1},
{"Name":"Leslie Dugan","Guests":1},
{"Name":"JJ Dugan","Guests":1},
{"Name":"Ryan Elueteri","Guests":1},
{"Name":"April Kemp","Guests":1},
{"Name":"Al Kemp","Guests":1},
{"Name":"Joel Picciotto","Guests":1},
{"Name":"Toni Picciotto","Guests":1},
{"Name":"Val Cruse","Guests":1},
{"Name":"Len Swisher","Guests":1},
{"Name":"Teresa Picciotto","Guests":1},
{"Name":"Brian Cruse","Guests":1},
{"Name":"Eric Miner","Guests":1},
{"Name":"Sharon Miner","Guests":1},
{"Name":"Joyce Nuttal","Guests":1},
{"Name":"Ted Nuttal ","Guests":1},
{"Name":"Sarah Recker","Guests":1},
{"Name":"Max Recker","Guests":1},
{"Name":"Chuck Tew","Guests":1},
{"Name":"Lisa Tew","Guests":1},
{"Name":"Sam Brickley","Guests":1},
{"Name":"Colleen Brickley","Guests":1},
{"Name":"Debra Joy","Guests":1},
{"Name":"James Joy III","Guests":1},
{"Name":"Lynn Cruse","Guests":1},
{"Name":"Tom Cruse","Guests":1},
{"Name":"Barb McKnight","Guests":1},
{"Name":"Ted McKnight","Guests":1},
{"Name":"Missy Perez","Guests":2},
{"Name":"Javier Perez","Guests":2},
{"Name":"Sean Perez","Guests":2},
{"Name":"Andrea Hitchcock","Guests":2},
{"Name":"Leah Hitchcock","Guests":2},
{"Name":"Tess Hitchcock","Guests":2},
{"Name":"Noni Adams","Guests":2},
{"Name":"Jack Adams","Guests":2},
{"Name":"Kenny Adams","Guests":2},
{"Name":"Bruce Brown","Guests":2},
{"Name":"Gretchen Brown","Guests":2},
{"Name":"Marge Miner","Guests":2},
{"Name":"Phil Picciotto","Guests":3},
{"Name":"Mario Picciotto","Guests":3},
{"Name":"Phil Picciotto","Guests":3},
{"Name":"MaryAnn Picciotto","Guests":3},
{"Name":"Mark Miner","Guests":3},
{"Name":"Claire Miner","Guests":3},
{"Name":"Caitie Miner","Guests":3},
{"Name":"Garrett Miner","Guests":3},
{"Name":"Bob Garvin","Guests":4},
{"Name":"Beth Garvin","Guests":4},
{"Name":"Emily Garvin","Guests":4},
{"Name":"Grant Garvin","Guests":4},
{"Name":"Carly Garvin","Guests":4},
{"Name":"Mary Tew","Guests":4},
{"Name":"Nathaniel Tew","Guests":4},
{"Name":"Curt Miner","Guests":4},
{"Name":"Andrea Miner","Guests":4},
{"Name":"Alice Miner","Guests":4},
{"Name":"Chloe Miner","Guests":4},
{"Name":"Tate Miner","Guests":4}];

	var fieldValue = $("#name").val();

	var theMatch = _.findWhere(guests, { Name: fieldValue });
	
	try {
		if ( theMatch.Guests == 4 ) {
			console.log("Four!");
			$("#plus1-column").show();
			$("#plus2-column").show();
			$("#plus3-column").show();
			$("#plus4-column").show();
		} else if ( theMatch.Guests == 3 ) {
			$("#plus1-column").show();
			$("#plus2-column").show();
			$("#plus3-column").show();
		} else if ( theMatch.Guests == 2 ) {
			$("#plus1-column").show();
			$("#plus2-column").show();
		} else if ( theMatch.Guests == 1 ) {
			$("#plus1-column").show();
		} else {
			$("#plus1-column").hide();
			$("#plus2-column").show();
			$("#plus3-column").show();
			$("#plus4-column").show();
		}
	} catch(e) {
		$("#plus1-column").hide();
		$("#plus2-column").hide();
		$("#plus3-column").hide();
		$("#plus4-column").hide();
		console.log(e);
	}
	
}