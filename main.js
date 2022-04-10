

const requestURL = 'https://jsonplaceholder.typicode.com/photos'

const userNameBtn = document.getElementById('userName')





function userName(URL){
    const xhr = new XMLHttpRequest()
    xhr.open('GET',requestURL)

    xhr.responseType = 'json'

xhr.onload = () => {
    if(xhr.status >= 400){
        console.error(xhr.status);
    }
    else{
        console.log(xhr.response);
    }

}
xhr.onerror=() =>{
    console.log(xhr.response);
}
xhr.send()
}

userNameBtn.addEventListener('click', (e) =>{
    e.preventDefault();
     userName(requestURL)
})

const requestUrL = 'https://jsonplaceholder.typicode.com/photos'
const mirBtn = document.getElementById('mir')
const ul = document.getElementById('class')

function mir(URL){
    const xhr = new XMLHttpRequest()
    xhr.responseType = 'json'


let users = {
    name: 'rakyp',
    age: 15,
    position: "Frontend"
}


xhr.open('POST',requestUrL)


xhr.onload = () => {
    if(xhr.status >= 400){
        console.log('error',xhr.status);
    }else{
        console.log(xhr.response);
    }

}

const data = JSON.stringify(users)
xhr.send(data)
}


mirBtn.addEventListener('click',(e) => {
    e.preventDefault();
    mir(requestUrL)
});
