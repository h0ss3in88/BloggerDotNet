const generator = require('../src/post_set');
const uuid = require('uuid');
const validator = require('validator');
const should = require('should');
describe.only('post data set generator spec', function() {
    describe('create 100 Posts instance', function() {
        let posts = [];
        before(function(done) {
            posts = generator(100).slice(0);
            done();
        });
        it('first post has unique id', function() {
            console.log(uuid.v4(posts[0].id));
            console.log(posts[0].id.toString());
            should(validator.isUUID(posts[0].id.toString())).be.true('post identifier should be uuid');
            posts.forEach(value => {
                console.log(value);
            })
        });
    });
});