$(document).ready(function() {
    toggleFields(); //call this first so we start out with the correct visibility depending on the selected form values
   //this will call our toggleFields function every time the selection value of our underAge field changes
    $("#plus1").change(function() { toggleFields(); });

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