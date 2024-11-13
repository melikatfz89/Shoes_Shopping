const containerElem=document.querySelector('.container')
const divElem=document.querySelector('.shoes-div')
const ShoesAray=[
    {id:1,title:"woman Shoes", price:8100, img:"images/img-1.webp", color:"#ac172c",brand:"adidas"},
    {id:2,title:"man Shoes", price:2700, img:"images/img-2.webp", color:"#0d71ac",brand:"adidas"},
    {id:3,title:"baby Shoes", price:3550, img:"images/img-3.webp", color:"black",brand:"adidas"},
    {id:4,title:"best Shoes", price:7550, img:"images/img-4.webp", color:"#0b9181",brand:"Puma"}
]

// let produceShoes= ShoesAray.forEach(function(myShoe){
//     containerElem.insertAdjacentHTML("beforeend", '<div class="shoes-div"><h1>'+myShoe.title +'</h1><img src="images/shoes/img-1.webp" alt=""><div class="second-div"><a>show more</a><span>$'+myShoe.price +'</span></div></div>')
// });

let produceShoes= ShoesAray.forEach(function(myshoe){
    let newElem=document.createElement('div');
    newElem.classList.add('second-div')
    newElem.innerHTML=`<div class="shoes-div">
                <h1>${myshoe.title}</h1>
                <div class="coloring" style="background-color:${myshoe.color};"></div>
                <p>${myshoe.brand}</p>
                <img src="${myshoe.img}" alt="">
                <div class="second-div">
                    <a href="singleproduct.html?id=${myshoe.id}">show more</a>
                    <span>${myshoe.price+ " " + "$"}</span>
                </div>
            </div>`;
            containerElem.append(newElem)
})