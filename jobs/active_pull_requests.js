var config = require('../config.js');
var request = require("request")

const url = "http://localhost:8080/test.json";
const token = config.github_access_token;
const superscription = "https://api.github.com/repos/tvoli/superscription/pulls?access_token=" + token + "&state=open";
console.log('superscription', superscription);

exports.interval = 30000;
exports.promise = function(fulfill, reject) {
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var json = JSON.parse(body);
      var pull_requests = json['pull_request'];
      fulfill({pull_requests: {table: pull_requests}});
    } else {
      reject(error);
    }
  });
};
