var Doctor = require('./../js/doctor-search.js').doctorModule;

$(document).ready(function() {
  var doctors = new Doctor();
  $('#find-doctors').click(function(e) {
    e.preventDefault();
    var symptom = $('#symptom').val();
    var test = doctors.getDoctors(symptom);
    $('#symptom').val(" ");
    $('#search-field').hide();
    $('#clear-doctors').show();
  });
  $('#clear-doctors').click(function(e) {
    e.preventDefault();
    $('ul').empty();
    $('#search-field').show();
    $('#clear-doctors').hide();
  });
});
