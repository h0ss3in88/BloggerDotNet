const Post = require('../src/post');
const uuid = require('uuid');
const validator = require('validator');
const should = require('should');
describe('post class spec', function() {
    describe('create new Post instance', function() {
        let post;
        before(function(done) {
            // id,title,description,status,content,createdAt,modifiedAt
            post = new Post(uuid.v4(),'testTitle','testDescription','published','post content',Date.now(),Date.now());
            done();
        });
        it('post has unique id', function() {
            should(validator.isUUID(post.id)).be.true('post id should be uuid');
        });
        it('post has published Status', function() {
            should(post.status).be.equal('published');
        });
    });
});