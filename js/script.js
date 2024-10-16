let ProductName = document.getElementById('ProductName')
let ProductCategory = document.getElementById('ProductCategory')
let ProductPrice = document.getElementById('ProductPrice')
let ProductDescraption = document.getElementById('ProductDescraption')
let search = document.getElementById('search')
let tbody = document.getElementById('tbody')


//smooth scroll
window.scroll({
    top: 5000, 
    left: 0, 
    behavior: 'smooth'
  });
//save in local storage
if (localStorage.keyProduct != null){
    products = JSON.parse(localStorage.getItem("keyProduct"))
}else{
    products = []
}
//create
function createProduct() {
    let product = {
        pName : ProductName.value,
        pCategory : ProductCategory.value,
        pPrice : ProductPrice.value,
        pDesc : ProductDescraption.value,
    }   

products.push(product);
console.log(products);
localStorage.setItem("keyProduct",JSON.stringify(products))
clearProduct ()
display ()
}   


display ()
//display
function display () {
let box =''
for (let i = 0; i < products.length; i++) {
    box += `<tr>
                <td>${i+1}</td>
                <td>${products[i].pName}</td>
                <td>${products[i].pCategory}</td>
                <td>${products[i].pPrice}</td>
                <td>${products[i].pDesc}</td>
                <td><button class="btn btn-warning"onclick="updateData(${i})" >Update</button></td>
                <td><button class="btn btn-danger" onclick="deleteProduct(${i})">Delete</button></td>
            </tr>`
    tbody.innerHTML=box
}

//clear
}
function clearProduct (){
ProductName.value = ''
ProductCategory.value =''
ProductPrice.value= ''
ProductDescraption.value =''
}

//delete
function deleteProduct(i){
    products.splice(i,1);
    localStorage.setItem("keyProduct",JSON.stringify(products));
    display();
    console.log(products);
    
}
//update
var update=document.getElementById('add')
function updateData(i) {
    scroll({
        top,
         behavior: 'smooth'
    }  
    )
ProductName.value = products[i].pName
ProductCategory.value=products[i].pCategory
ProductPrice.value=products[i].pPrice
ProductDescraption.value=products[i].pDesc
update.innerHTML="Update"
update.onclick=function(){
products= JSON.parse(localStorage.getItem("keyProduct"))
products[i].pName=ProductName.value 
products[i].pCategory=ProductCategory.value
products[i].pPrice=ProductPrice.value
products[i].pDesc=ProductDescraption.value
localStorage.setItem("keyProduct",JSON.stringify(products))
display()
clearProduct ()
update.innerHTML="add Product";
update.onclick=function(){
    createProduct()  
}
}
}
//search

search.addEventListener("keyup",function(value){
    console.log(this.value);
    str = ''
    for (let i = 0; i < products.length; i++) {
       if (products[i].pName.includes(this.value)) {
        str+=`<tr>
                <td>${i+1}</td>
                <td>${products[i].pName}</td>
                <td>${products[i].pCategory}</td>
                <td>${products[i].pPrice}</td>
                <td>${products[i].pDesc}</td>
                <td><button class="btn btn-warning"onclick="updateData(${i})" >Update</button></td>
                <td><button class="btn btn-danger" onclick="deleteProduct(${i})">Delete</button></td>
            </tr>`
    tbody.innerHTML=str
        
       }  
    }

})