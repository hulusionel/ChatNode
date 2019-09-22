const session = require('express-session');
const redisStore = require('connect-redis')(session);
const redis   = require("redis");
const client  = redis.createClient();

module.exports = new redisStore({
	host: process.env.REDIS_URI,
	port: process.env.REDIS_PORT,
	pass: process.env.REDIS_PASS,
	client: client,ttl :  260
});