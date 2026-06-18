const test = require("node:test");
const assert = require("node:assert");
const request = require("supertest");
const app = require("../src/app");

test("GET /api/health retourne status ok", async () => {
  const response = await request(app).get("/api/health");

  assert.strictEqual(response.status, 200);
  assert.strictEqual(response.body.status, "ok");
  assert.strictEqual(response.body.service, "backend");
});

test("GET /api/message retourne un message", async () => {
  const response = await request(app).get("/api/message");

  assert.strictEqual(response.status, 200);
  assert.ok(response.body.message.includes("backend"));
});