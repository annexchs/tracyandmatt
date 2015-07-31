$(document).ready(function() {
    checkEmail();
    toggleFields(); //call this first so we start out with the correct visibility depending on the selected form values
   //this will call our toggleFields function every time the selection value of our underAge field changes
    $("#plus1").change(function() { toggleFields(); });
    
    $("#email").change(function() { checkEmail(); });

    $("#submit-button").submit(function() {
      
    });
});
//this toggles the visibility of our parent permission fields depending on the current selected value of the underAge field
function toggleFields()
{
    if ($("#plus1").prop('checked')) {
      $("#plus1First").show();
      $("#plus1Middle").show();
      $("#plus1Last").show();
    }
    else {
      $("#plus1First").hide();
      $("#plus1Middle").hide();
      $("#plus1Last").hide();
    }
}

function checkEmail()
{
  var emails = ["test@email.com"];
  
  console.log(jQuery.inArray($("#email").val(), emails) !== -1);
  if (jQuery.inArray($("#email").val(), emails) !== -1) {
    $("#plus1-column").show();
  }
  else {
    $("#plus1-column").hide();
  }
}