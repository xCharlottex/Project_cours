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

const btn = document.querySelector(".button");

btn.addEventListener('click', function(){
    const content = document.querySelector(".paid-content");

    content.style.display ="block";
    btn.style.display='none';


})
