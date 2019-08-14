var request = require('supertest');
var app = require('../index')
describe('GET', () => {
    test('should respond with hello world', (done) => {
        request(app).get('/').expect(200, "hello world").end(done);
    });
});