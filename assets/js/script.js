// const btn = document.querySelector(".button");
// const body = document.querySelector("body");

// console.log('btn' + btn)
// console.log(body + 'body')

// btn.addEventListener('click', function (){
//     const title = document.querySelector('.title');
//     title.textContent = "Tu as bien cliqué, félicitation";
//     if(body.classList.contains("body1")){
//         body.classList.remove("body1");
//         body.classList.add("body2")

//     }else {
//         body.classList.remove("body2")
//         body.classList.add("body1");
//         title.textContent = "Hola, voici mon petit site";

//         localStorage.setItem('button', 'true')
//     }

//     body.classList.toggle('body2')
    
// })

// suite

// const btn = document.querySelector(".button");

// btn.addEventListener('click', function(){
//     const content = document.querySelector(".paid-content");

//     content.style.display ="block";
//     btn.style.display='none';
    

//     // content.classList.remove('paid-content');
//     // btn.classList.add('display-n');

// })

// suite

const btn = document.querySelector('.button');

// click sur le btn 
btn.addEventListener('click', function(){
    // je veux créer un h1
    const h1Element = document.createElement('h1');
    h1Element.textContent ='Mon article';

    const imageElement = document.createElement('img');
    imageElement.setAttribute('src', '')

    const pElement = document.createElement('p');
    pElement.textContent = 'blablabla';

    // cibler pour l'id => #, pour la classe => . , pour la balise => rien
    const container = document.querySelector('.paid-content');
    container.appendChild(h1Element);
    container.appendChild(imageElement);
    container.appendChild(pElement)

    btn.style.display ='none';


})




