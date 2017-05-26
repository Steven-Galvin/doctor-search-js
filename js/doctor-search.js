var apiKey = require('./../.env').apiKey;

function Doctor() {
}


var doctors = [];
Doctor.prototype.getDoctors = function(symptom) {
  doctors = [];
  $('#doctor-list').text("");
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ symptom +'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
    .then(function(result) {
      result.data.forEach(function(doc) {
        doctors.push( {
          first: doc.profile.first_name,
          last: doc.profile.last_name,
          middle: doc.profile.middle_name,
          bio: doc.profile.bio,
          title: doc.profile.title,
          gender: doc.profile.gender
        });
      });

      doctors.forEach(function(doc) {
        if (doc.middle != undefined) {
          doc.middle = doc.middle;
        } else {
          doc.middle = ""
        }
      });

      doctors.forEach(function(doc) {
        $('#doctor-list').append(
          "<li><h2>" + doc.first + " " + doc.middle + " " + doc.last + ", " + doc.title + "</h2><br<small>" + doc.gender + "</small><p>" + doc.bio + "</p></li>"
        );
      });
      console.log(doctors);
    })
   .fail(function(error){
      console.log("fail");
    });
  // $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=' + lat + '%2C' + lon + '%2C%205&user_location=' + lat + '%2C' + lon + '&skip=0&limit=20&user_key=' + apiKey)
};

exports.doctorModule = Doctor;
