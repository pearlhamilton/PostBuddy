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
    addHashtoUrl(id)

    
}

function addHashtoUrl(id){
    window.location.hash += `${id}`
}

// we want to listen for a hash change which will then render new content 

window.addEventListener('hashchange', updatePage)
window.addEventListener('load', updatePage)

function updatePage(){
    let id = window.location.hash.substring(1)
    if (id.length > 0){
        getPost(id) 
    }
   
}

async function getPost(id){
    try{
    const body = document.querySelector('body')
    body.innerHTML = " "
     let response = await fetch(`http://localhost:3000/posts/${id}`)
    let data = await response.json()  
    if (data.err){
        throwError(data)
    }

    else{
    renderNewContent(data)
    }
}
    catch (error){
        console.warn(error);


    }

}

function renderNewContent(data){

    const postDiv = document.createElement('div');
    const h1 = document.createElement('h1')
    const h2 = document.createElement('h2')
    const para = document.createElement('p')
    postDiv.append(h1)
    postDiv.append(h2)
    postDiv.append(para)
    h1.textContent = data.title
    h2.textContent = data.author
    para.textContent = data.post
    body.append(postDiv)
    

}

function throwError(data){
    const h1 = document.createElement('h1')
    h1.textContent = `${data.err}`
    body.append(h1)

}

