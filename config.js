require('dotenv').config();
var redis = require('redis');

var config = {
  redis_server_host: process.env.REDIS_SERVER_HOST || "127.0.0.1",
  redis_server_port: process.env.REDIS_SERVER_PORT || 6379,
  redis_server_password: process.env.REDIS_SERVER_PASSWORD || undefined
};

exports.github_access_token = process.env.GITHUB_TOKEN || undefined;

exports.getRedisClient = function() {
  var options = {
      password: config.redis_server_password
  };

  return redis.createClient(config.redis_server_port, config.redis_server_host, options);
};
