//Create event listener for entire window
window.addEventListener('submit', createPost);

async function createPost(e) {
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
    let response = await fetch("http://localhost:3000/posts", options)
        .then(r => r.json())
        .then(data => getPost(data.id))
        .catch(console.warn);
    // console.log(`${response} is of type ${typeof(response)}`);
  
    return response;

    
}


async function getPost(id){
    const body = document.querySelector('body')
    body.innerHTML = " "
    let response = await fetch(`http://localhost:3000/posts/${id}`)
        .then(r => r.json())
        .then(data => renderNewContent(data))

}

function renderNewContent(data){
    const body = document.querySelector('body')
    body.innerHTML = `${data.title}, ${data.author}, ${data.post}`

}