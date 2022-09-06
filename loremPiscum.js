let body = document.querySelector("body");
let main = document.querySelector("main");

let section, p, button, img, a;

/**
section= document.createElement("section");
aside = document.createElement("aside");
p = document.createElement("p");
button = document.createElement("button");
img = document.createElement("img");
a = document.createElement('a');

 */


/**
 * var a = document.createElement('a');
      var linkText = document.createTextNode("my title text");
      a.appendChild(linkText);
      a.title = "my title text";
      a.href = "http://example.com";
      document.body.appendChild(a);
 */

let url = `https://picsum.photos/v2/list?page=2&limit=6`;
let urlImage =`https://picsum.photos/id/`

fetch(url)
.then(function(response){
    console.log(response);
    if(response.ok){
        return Promise.resolve(response.json());
    }else{
        return Promise.reject(new Error("Erreur dans la requete"))
    }
}).then((data)=>{
    console.log(data);
    data[1].height = 200;
    getImage(data);
}).catch(function(e){
    console.log(e);
})

function getImage(collection) {
    collection.forEach(element => {
        console.log(element);
        createCard(`${urlImage}${element.id}/2000/2000`);
        fillCard(element.author, element.url);
    });
}


function createCard(urlImag){
    section= document.createElement("section");
    aside = document.createElement("aside");
    p = document.createElement("p");
    button = document.createElement("button");
    img = document.createElement("img");
    
    main.append(section);
    section.append(aside);
    aside.append(p);
    aside.append(button);
    section.append(img);
    img.src=`${urlImag}`
}

function fillCard(author, urlUnsplash) {
    p.textContent = `${author}`;
    a = document.createElement('a');
    a.textContent ="visit"
    a.href=`${urlUnsplash}`
    button.append(a);
}

