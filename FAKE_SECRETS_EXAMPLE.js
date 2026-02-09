// FAKE_SECRETS_EXAMPLE.js
// This file contains FAKE hardcoded secrets for testing the GitLeaks scanner
// DO NOT COMMIT THIS FILE - It's only for demonstration purposes

// WARNING: These are intentionally bad practices for testing!

// Fake API Key (modified to avoid GitHub push protection)
const API_KEY = "myapp_api_key_abc123def456ghi789jkl012mno345pqr678stu901vwx234";

// Fake Database Password
const DB_CONFIG = {
  host: "localhost",
  user: "admin",
  password: "SuperSecret123Password!",
  database: "juice_shop"
};

// Fake MongoDB Connection String
const MONGO_URI = "mongodb://admin:MySecretPassword456@cluster0.mongodb.net/juiceshop";

// Fake JWT Secret
const JWT_SECRET = "ThisIsMyJWTSecretKey12345ForJuiceShopApplication";

// Fake AWS-like Credentials (modified format)
const AWS_ACCESS_KEY_ID = "MYACCESSKEY123456789";
const AWS_SECRET_ACCESS_KEY = "MySecretAccessKey123456789abcdefghijklmnop";

// Fake GitHub-like Token (modified format)
const GITHUB_TOKEN = "myapp_token_1234567890abcdefghijklmnopqrstuvwxyz";

// Fake Payment API Key (modified format)
const PAYMENT_KEY = "payment_test_key_4eC39HqLyjWDarjtT1zdp7dc";

module.exports = {
  API_KEY,
  DB_CONFIG,
  MONGO_URI,
  JWT_SECRET,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  GITHUB_TOKEN,
  PAYMENT_KEY
};
