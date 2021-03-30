db = connect("localhost:27017/posts")

db.posts.drop()

db.createCollection("posts", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: [ "title", "author", "post" ],
          properties: {
             title: {
                bsonType: "string",
                description: "must be a string and is required"
             },
             author: {
                bsonType: "string",
               
                description: "must be a string and is required"
             },
             post: {
                bsonType: "string",
                description: "must be a string and is required"
             }
            
          }
       }
    }
 })



db.posts.insert([{title: "hello", author: "Pearl", post: "Hi my name is Pearl"}])