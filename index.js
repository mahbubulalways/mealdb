const  mealDbData=(items)=>{
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${items}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayData(data.meals))
}

const displayData=(data)=>{
    console.log(data)
    const mealsContainer=document.getElementById('meals-container');
    document.getElementById('meals-container').innerHTML=""
   
    data.forEach(meal => {
      
    console.log(meal
        )



    const div=document.createElement("div");
    
    div.innerHTML=`
    
    <div class="card card-compact w-full bg-base-100 shadow-xl">
    <figure><img src="${meal.strMealThumb}"  /></figure>
    <div class="card-body">
      <h2 class="card-title">${meal.strMeal}</h2>
      <h3>${meal.strCategory}</h3>
      <h5>There are many variations of passages of available, but the majority have suffered</h5>
      <div class="card-actions justify-end">
      
  <button onclick="openModal(${meal.idMeal})"><label for="my-modal" class="btn btn-warning " >see more</label></button>
      </div>
    </div>
  </div>
    `
    mealsContainer.appendChild(div)

  });
 
}

const searchBtn=()=>{
    const favourite =document.getElementById("favourite")
    favourite.style.display="block"
    const inputValue= document.getElementById("inputText").value;
    document.getElementById("inputText").value=""
    console.log(inputValue)
    mealDbData(inputValue)
}


const openModal=(mealId)=>{
    console.log(mealId)
    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>mealDetails(data.meals[0]))
}

const mealDetails=(meal)=>{
    console.log(meal)
    const modalBody=  document.getElementById("modal-details")
    modalBody.innerHTML=`
    
    <h2 class="card-title text-center">${meal.strMeal}</h2>
    <img class="w-2/3 mx-auto my-2" src="${meal.strMealThumb}"  />
    <p>Food Area: ${meal.strArea}</p>
    <p>Youtube link: ${meal.strYoutube}</p>  
    `
}

