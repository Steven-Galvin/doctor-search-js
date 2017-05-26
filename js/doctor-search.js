var apiKey = require('./../.env').apiKey;

function Doctor(){
}

Doctor.prototype.getDoctors = function(symptom) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ symptom +'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
    .then(function(result) {
      console.log(result);
      var doctors = [];
      var test = result.data
      test.forEach(function(doctor) {
        doctors.push(doctor.profile.first_name);
      });
      console.log(doctors);
      console.log(result.data[0].profile.first_name);
      console.log(result.data[0].profile.last_name);
    })
   .fail(function(error){
      console.log("fail");
    });
  // $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=' + lat + '%2C' + lon + '%2C%205&user_location=' + lat + '%2C' + lon + '&skip=0&limit=20&user_key=' + apiKey)
};

exports.doctorModule = Doctor;
