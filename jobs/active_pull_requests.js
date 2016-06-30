var config = require('../config.js');
var request = require("request")
const token = config.github_access_token;
const url = "https://api.github.com/repos/tvoli/login/pulls?access_token=" + token + "&state=open";// "https://s3-eu-west-1.amazonaws.com/uploads-eu.hipchat.com/30010/1599619/u3k7lkbZihCdq6j/test.json"; // "http://localhost:8080/test.json";

function p(s) {
  console.log(s)
};

var options = {
  url: url,
  headers: {
    'User-Agent': 'hello-friend'
  }
};

function parseGithub(json) {
  var r = json.map(function(pr){
      return pr["title"];
  });
  return r;
};

exports.interval = 30000;
exports.promise = function(fulfill, reject) {

  request(options, function (error, response, body) {

    // p("the stuff");
    // p(response);
    p(body);

    if (!error && response.statusCode == 200) {
      var json = JSON.parse(body);
      var pulls = parseGithub(json);

      console.log(pulls);

      var full = {pull_requests: {list: pulls}};

      console.log(full);

      fulfill(full);
    } else {
      reject(error);
    }
  });
};
