var Doctor = require('./../js/doctor-search.js').doctorModule;

$(document).ready(function() {
  var doctors = new Doctor();
  $('#find-doctors').click(function(e) {
    e.preventDefault();
    var symptom = $('#symptom').val();
    var test = doctors.getDoctors(symptom);
    console.log(test);
  });
});
