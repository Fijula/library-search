console.log("this is script.js")
// constructor
function Book(name,author,category)
{
this.name = name;
this.category = category;
this.author = author;
}
// dispaly constructor
function Display(){

}

// add methods to display protypes\
// validate
Display.prototype.validate = function(book){
    if((book.name.length<2)||(book.author.length<2))
    return false;
    else
    return true;
}
Display.prototype.show = function(type,message1)
{
  
let message = document.getElementById('message');


message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show alert-warning" role="alert">
<strong>${message1}</strong> 
<button type="button" class="btn-close" data-dismiss="alert" aria-label="Close">

</button>
</div>`;
setTimeout(function () {
    message.innerHTML = ""
},2000) ;
}

// else 
// let message = document.getElementById('message');
// message.innerHTML = ``

// add funciton
Display.prototype.add = function(book){
     let tableBody = document.getElementById('tableBody');
let uiString  = `<tr>
<th scope="row"></th>
<td>${book.name}</td>
<td>${book.author}</td>
<td>${book.category}</td>
</tr>`;
tableBody.innerHTML += uiString;

}
// clear fucntion
Display.prototype.clear = function(){
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

// event listener libraryForm -submit when pressed call a fucntion
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit',libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log("you have submitted form"); 
  
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('Author').value;
    

    let Fairy = document.getElementById('Fairy');
    let Moral = document.getElementById('Moral');
    let Inspirational = document.getElementById('Inspirational');
    
    let category;
    if(Fairy.checked){
        category = Fairy.value;
    }
    else if(Moral.checked){
        category = Moral.value;
    }
    else {
        category = Inspirational.value;
    }
    
    let book = new Book(name, author, category);
    console.log(book);
    
    // diaply fucntion
    let display = new Display();
    
    if(display.validate(book))
    { e.preventDefault();
        display.add(book);
        
        display.show('sucess','Your Book Has Been Successfully Added..!')
        display.clear(); 
        }
    else{
        e.preventDefault();
        display.show('error','Sorry ! Your book cannot be added ')
    }
   
}
