// console.log(document.head)
// console.log(document.images)
// console.log(document.forms)

//-------GETELEMENTBYID-------------//
// const element = document.getElementById('items') 
// console.log(element)

//const element2 = document.getElementById('header-title') 
// const element2 = document.getElementById('main-header') 
// console.log(element2)

// element2.textContent = 'Sharpner'

// element2.style.border = 'solid 3px #000'

// const element3 = document.getElementById('h2')
// element3.style.color = 'green'
// element3.style.fontWeight = 'bold'



//-------------GETELEMENTBYCLASS-----------//
// Make the 3 rd element in the list have green background
// color
// Make all the elements in the list have bold color font

// const item = document.getElementsByClassName('list-group-item')
//item[2].textContent = 'Hello'
//console.log(item[2])
// item[2].style.backgroundColor = 'green'

// for(var i=0 ; i<item.length ;i++){
//      item[i].style.fontWeight = 'bold'
// }

//----Question -----------//
// Add a new li element without the same class Name
// And try editing it with 
// getelementsbyclassname and then by getelementbytagname

//-------Ans-------------//
// var list = document.getElementsByClassName('list-group-item')
// list[0].style.fontWeight = 'bold'
// list[0].style.color = 'red'

// var li = document.getElementsByTagName('li')
// console.log(li)
// li[4].style.fontWeight = 'bold'
// li[4].style.color = '#911'

//----We can use any CSS selector in this---//

//-------QuerySelector--------//


// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 20px black'

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "send";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red'

//-------QuerySelectorAll--------//
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';


var item_2 = document.querySelectorAll('li');
item_2[1].style.backgroundColor = 'green';
item_2[1].style.color = 'green';
item_2[2].style.visibility = 'hidden';

for(var i=1 ; i<item_2.length ;i+=2){
   item_2[i].style.backgroundColor = 'green';
}


