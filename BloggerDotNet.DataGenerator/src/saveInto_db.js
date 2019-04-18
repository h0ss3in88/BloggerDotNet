const personGenerator = require('./person_set');
const postGenerator = require('./post_set');
const sqlLite = require('sqlite3').verbose();
const path = require('path');

let db = new sqlLite.Database(path.resolve(__dirname, '../', 'Blogger.db'), sqlLite.OPEN_READWRITE | sqlLite.OPEN_CREATE, (err) => {
   if (err) {
       console.log(`error occurred due to ${err}`);
   } 
   console.log(`connected successfully to sqlLite database`);
});
const tablesCreation = (db) => {
    return new Promise((resolve, reject) => {
        const createPersonTableSql = 'create table if not exists people(id text primary key, firstName text not null ,lastName text not null, age int not null , email text not null unique);';
        const createPostTableSql = 'create table if not exists posts(id text primary key, title text not null ,description text null, content text not null ,status text default \'draft\',createdAt text, modifiedAt text);';
        const dropPersonTable = 'drop table if exists people;';
        const dropPostTable = 'drop table if exists posts;';
        db.exec(dropPersonTable, err => {
            if (err) {
            }
            console.log(1);
            db.exec(dropPostTable, err => {
                console.log(2);
                if (err) {
                    reject(err);
                }
                db.exec(createPostTableSql, err => {
                    console.log(3);
                    if (err) {
                        reject(err);
                    }
                    db.exec(createPersonTableSql, err => {
                        console.log(4);
                        if (err) {
                            reject(err);
                        }else {
                            resolve(db);
                        }
                    });
                });
            });
        });
    });
};
const populatePosts = (db) => {
    return new Promise((resolve, reject) => {
        const insertStatement = `insert into posts(id,title,description,content,status,createdAt,modifiedAt)`;
        let values = ' values';
        let posts = postGenerator(1000);
        console.log(`posts length : ${posts.length}`);
        posts.forEach((post, index) => {
            if (index === posts.length - 1 ){
                values += `(${post.id},${post.title},${post.description},${post.content},${post.status},${post.createdAt},${post.modifiedAt});`;
            } else {
                values += `(${post.id},${post.title},${post.description},${post.content},${post.status},${post.createdAt},${post.modifiedAt}),\r\n`
            }
        });
        let sqlCommand = insertStatement + values;
        db.exec(sqlCommand,(err, rows) => {
            if (err) {
                reject(err);
            }else if (rows !== undefined){
                console.log(rows);
                rows.forEach(value => {
                    console.log(value);
                });
            }
            console.log('populate posts has done!');
            resolve(db);
        });
    })
};
const populatePeople = (db) => {
    return new Promise((resolve, reject) => {
        let insertCommand = `insert into people (id,firstName,lastName,age,email)`;
        let values = ' values';
        let persons = personGenerator(1000);
        console.log(persons.length);
        persons.forEach((person,index) => {
            if (index === persons.length - 1 ){
                values += `(${person.id},${person.firstName},${person.lastName},${person.age},${person.email});`
            } else {
                values += `(${person.id},${person.firstName},${person.lastName},${person.age},${person.email}),\r\n`
            }
        });
        let sqlCommand = insertCommand + values;
        db.exec(sqlCommand,(err, rows) => {
            if (err) {
                reject(err);
            }else if (rows !== undefined){
                console.log(rows);
                rows.forEach(value => {
                    console.log(value);
                });
            }
            console.log('people population has done!');
            resolve(db);
        });
    });
};
tablesCreation(db).then((db) => {
    return populatePosts(db);
}).then((db) => {
    return populatePeople(db);
}).catch((err) => {
    console.log(err);
    db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Close the database connection.');
    });
});
