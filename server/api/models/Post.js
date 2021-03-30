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

            } catch(err) {

            }
        })

    }

    static findById() {
        return new Promise (async (resolve, reject) => {
            try {

            } catch(err) {
                
            }
        })
    }

    static create(postData) {
        return new Promise (async (resolve, reject) => {
            try {

            } catch(err) {
                
            }
        })
    }
}
