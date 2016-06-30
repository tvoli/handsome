var request = require("request")
const url = "http://localhost:8080/test.json";

exports.interval = 30000;
exports.promise = function(fulfill, reject) {
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var json = JSON.parse(body);
      var pull_requests = json['pull_request'];
      fulfill({pull_requests: {list: pull_requests}});
    } else {
      reject(error);
    }
  });
};
