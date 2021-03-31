//Create event listener for entire window
window.addEventListener('submit', createPost);

function createPost(e) {
    e.preventDefault();
    console.log(e.target.title.value);
    const body = {
        "title": e.target.title.value,
        "author": e.target.author.value,
        "post": e.target.post.value
    };
    console.log(`User input is ${body}.`);

    const options = {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
    let response = fetch("http://localhost:3000/posts", options)
        .then(r => r.json())
        .catch(console.warn);
    console.log(`${response} is of type ${typeof(response)}`);
    return response;
}