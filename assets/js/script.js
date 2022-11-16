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

// const btn = document.querySelector('.button');

// // click sur le btn 
// btn.addEventListener('click', function(){
//     // je veux créer un h1
//     const h1Element = document.createElement('h1');
//     h1Element.textContent ='Mon article';

//     const imageElement = document.createElement('img');
//     imageElement.setAttribute('src', '')

//     const pElement = document.createElement('p');
//     pElement.textContent = 'blablabla';

//     // cibler pour l'id => #, pour la classe => . , pour la balise => rien
//     const container = document.querySelector('.paid-content');
//     container.appendChild(h1Element);
//     container.appendChild(imageElement);
//     container.appendChild(pElement)

//     btn.style.display ='none';


// })


// suite 

// const btn = document.querySelector('.button');

// btn.addEventListener('click', function() {
//     const content = document.querySelector('.paid-content');

//     const fetchMeals = async () => {
//         const mealsReponse = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
//         const mealsData = await mealsReponse.json();

//         // content.style.display = 'block';
//         // btn.style.display = 'none';
//         return mealsData;
//     }
//         content.classList.remove('paid-content');
//         btn.classList.add('display-n')
// })

// const displayMeals = async() => {
//     // faire un appel fetch pour récup les données, depuis une api 
//     const mealsData = await fetchMeals();

//     // cibler la div dans le HTML qui possède l'id root 
//     const container = document.querySelector('#root');

//     // faire une boucle sur les données récupérées depuis l'API
//     // grâce à la fonction map on pourrait utiliser for ou forEach
//     mealsData.meals.map((mealsData) => {

//         // creer un élément html h2
//         const h2Element = document.createElement('h2');

//         //  passer en titre de l'élément 
//         h2Element.textContent = mealsData.strMeal;

//         // Insérer l'élément dans la div qui a l'id #root
//         container.append(h2Element);
//     })
// }

// displayMeals();
// récup les données fournies par cette api , les afficher en js dans la div avec l'id root

// suite

// afficher dans votre application : 
// - l'image de la recette
// - la catégorie 
// - les instructions
// - les ingrédients
// et shrek


// à laisser de côté pour l'instant
const fetchMeals = async () => {
    const mealsResponse = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const mealsData = await mealsResponse.json();

    return mealsData;
}

const fetchCategories = async () => {
    const categoryResponse = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const categoryData = await categoryResponse.json();

    return categoryData;
}

const createPElement = (textToDisplay, container) => {
    const pElement = document.createElement('p');
    pElement.textContent = textToDisplay;
    container.append(pElement);
}

const createH2Element = (textToDisplay, container) => {
    const h2Element = document.createElement('h2');
    h2Element.textContent = textToDisplay;
    container.append(h2Element);
}

const createImgElement = (imageToDisplay, container) => {
    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', imageToDisplay);
    container.append(imgElement);
}

const displayMeals = async() => {
    const container = document.querySelector('#root');

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const page = urlParams.get('page');
    

    if (page === "meals") {
        const mealsData = await fetchMeals();

        mealsData.meals.map((mealData) => {

            createH2Element(mealData.strMeal, container);
            createImgElement(mealData.strMealThumb, container);
            createPElement(mealData.strCategory, container);
            createPElement(mealData.strInstructions, container);
            createPElement(mealData.strTags, container);
    
            const ulElement = document.createElement('ul');
            container.append(ulElement);
    
    
            for(let i = 1; i <= 20; i++) {
    
                if (mealData["strIngredient" + i]) {
                    const liElement = document.createElement('li');
                    liElement.textContent = mealData["strIngredient" + i];
                    ulElement.append(liElement);
                }
    
            }
    
        })
    } else if(page === "categories") {
        const categoriesData = await fetchCategories();

        categoriesData.categories.map((categoryData) => {
            createH2Element(categoryData.strCategory, container);
        });
    }

    
}


displayMeals();



