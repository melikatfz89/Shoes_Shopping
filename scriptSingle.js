

let singleElem=document.querySelector('.containerSingle')
let h1Elem=document.querySelector('h1')
let pElem=document.querySelector('.branding')
let spanElem=document.querySelector('span')
let colorElem=document.querySelector('.colors')
let imgElem=document.querySelector('img')


const ShoesAray=[
    {id:1,title:"woman Shoes", price:8100, img:"images/img-1.webp", color:"#ac172c",brand:"adidas"},
    {id:2,title:"man Shoes", price:2700, img:"images/img-2.webp", color:"#0d71ac",brand:"adidas"},
    {id:3,title:"baby Shoes", price:3550, img:"images/img-3.webp", color:"black",brand:"adidas"},
    {id:4,title:"best Shoes", price:7550, img:"images/img-4.webp", color:"#0b9181",brand:"Puma"}
]

let locationproduct= new URLSearchParams(location.search);
let getLocationId= locationproduct.get('id');

let findshoe=ShoesAray.find(function(myshoe){
    return myshoe.id===Number(getLocationId);
});

if (findshoe){
     h1Elem.innerHTML=findshoe.title;
     spanElem.innerHTML=findshoe.price + "  " + "$";
     colorElem.style.backgroundColor = findshoe.color;
     pElem.innerHTML=findshoe.brand;
     imgElem.setAttribute('src',findshoe.img)
}
else{
    location.href='https://melikatfz89.github.io/Shoes_Shopping/';
}