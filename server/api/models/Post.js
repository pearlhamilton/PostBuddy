const { init } = require('../dbConfig/config');
const { ObjectId } = require('mongodb');

class Post {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.author = data.author;
        this.post = data.post;
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                const postsData = await db.collection("posts").find().toArray();
                const posts = postsData.map(
                    p => new Post({ ...p, id: p.id})
                );
                resolve(posts);
            } catch(err) {
                console.log(err);
                reject("Error retrieving all posts");
            }
        })
    };

    static findById(id) {
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                let postData = await db.collection('posts').find({_id: ObjectId(id)}).toArray();
                let post = new Post( {...postData[0], id: postData[0].id} );
                resolve(post);
            } catch(err) {
                reject("Could not find that post");                
            }
        });
    };

    static create(title, author, post) {
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                let postData = await db.collection('posts').insertOne({ title, author, post });
                let newPost = new Post(postData.ops[0]);
                resolve(newPost);
            } catch(err) {
                reject('Sorry, we could not create that post!');                
            }
        });
    };
};

module.exports = Post;
