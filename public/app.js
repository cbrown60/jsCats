
  var catsArray ={
    name: 'Belle',
    faveFood:'Tuna',
    image:'http://ddydc3qiky-flywheel.netdna-ssl.com/wp-content/uploads/2016/10/enhanced-1312-1435088986-17.jpg'
  }
        
      

var createUl = function(){
  var cat = document.createElement('ul')
  cat.classList.add('cat')
  return cat
}

var createLiName = function(text){
  var name = document.createElement('li')
  name.innerText = 'Name: ' + text
  return name
}

var createLiFaveFood = function(text){
  var food = document.createElement('li')
  food.innerText = 'Favourite Food: ' + text
  return food
}

var createImage = function(link){
  var image = document.createElement('li')
  image.innerHTML = '<img width="500" src = ' + link +'>'
  return image
}

var addArray = function(cat){
  var cats = document.querySelector('#cats')
  var Ul = createUl()

  var nameLi = createLiName(cat.name)
  var foodLi = createLiFaveFood(cat.faveFood)
  var imageLi = createImage(cat.image)

  Ul.appendChild(nameLi)
  Ul.appendChild(foodLi)
  Ul.appendChild(imageLi)

  cats.appendChild(Ul)
}

app = function(){

  addArray(catsArray)
}




window.onload = app







       


