const faker = require('faker');
const Post = require('./post');
const postStatus = {
    0: 'published',
    1: 'draft',
    2: 'unknown',
    3: 'deleted'
};

module.exports = postsNumber => {
    let _posts = [];
    for (let i=0; i <= postsNumber; i++) {
        let id = faker.random.uuid();
        let title = faker.lorem.word();
        let description = faker.lorem.sentence(10,2);
        let content = faker.lorem.paragraphs(8, '.');
        let status = postStatus[faker.random.number({ min: 0, max: 3})];
        let createdAt = faker.date.between('2012-10-10','2018-10-10');
        let _post = new Post(`"${id}"`,`"${title}"`,`"${description}"`,`"${status}"`,`"${content}"`,`"${createdAt}"`,`"${createdAt}"`);
        _posts.push(_post);
    }
    return _posts;
};