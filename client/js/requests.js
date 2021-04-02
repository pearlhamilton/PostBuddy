//Create event listener for entire window
window.addEventListener('submit', createPost);

const body = document.querySelector('body')

async function createPost(e) {
    e.preventDefault();
    const body = {
        "title": e.target.title.value,
        "author": e.target.author.value,
        "post": e.target.post.value
    };

    const options = {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
    let response = await fetch("http://localhost:3000/posts", options)
    let data = await response.json()
    let id = data.id
    window.location.hash += `${id}`

    
}

// we want to listen for a hash change which will then render new content 

window.addEventListener('hashchange', updatePage)
window.addEventListener('load', updatePage)

function updatePage(){
    let id = window.location.hash.substring(1)
    console.log(id)

    if (id.length > 0){
        getPost(id) 
    }
   
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

