var container=document.createElement("div");
container.className="container";
var row=document.createElement("div")
row.className="row";
var input=document.createElement("input")
input.setAttribute("type","text")
input.setAttribute("placeholder","Enter your Country Name")
input.setAttribute("id","countryName")
var button=document.createElement("button")
button.innerHTML="Get countryCode"
button.classList.add("btn","btn-primary")
button.addEventListener("click",countries)
var div=document.createElement("div")
var div1=document.createElement("div")
div1.setAttribute("id","countryCode")
var button1=document.createElement("button")
button1.innerHTML="Get Holidays WorldWWide in a Week"
button1.classList.add("btn","btn-primary","mt-5")
button1.addEventListener("click",holidays)
div.append(input,button,div1,button1)
container.append(div,row);

document.body.append(container)



// async function dogs(){
//     let url=("https://dog.ceo/api/breed/hound/images")
//     let result=await fetch(url)
//     let result1=await result.json()

//      console.log(result1.message)
//       row.innerHTML+=`<div>
//       <img src="${result1.message}"  alt="...">
//       </div>`
//       document.body.append(container)
// }

// dogs()






//  async function memes(){
//     var url=("https://api.imgflip.com/get_memes")
//     var result=await fetch(url)
//     var result2=await result.json()
//     console.log(result2)
//    
//         row.innerHTML+=`<div class="col-md-4">
//                 <div class="card" style="width: 18rem;">
//             <img src="${result2.url}" class="card-img-top" alt="...">
//             <div class="card-body">
//             <h5 class="card-title">Card title</h5>
//             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//             <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//             </div>
//                 </div>`
//                 document.body.append(container)
//     
//  }

//  memes()




async function holidays(){
    let url=("https://date.nager.at/api/v3/NextPublicHolidaysWorldwide")
    let result=await fetch(url)
    let result1=await result.json()

     console.log(result1)
     for(let i=0; i<result1.length; i++){

      row.innerHTML+=`<div class="card border-dark mt-5 mb-3" style="max-width: 18rem;">
      <div class="card-header text-bg-primary">Upcoming Holidays in a Week</div>
      <div class="card-body">
      <p class="card-text"><h5>countryCode: ${result1[i].countryCode}</h5></p>
        <h3 class="card-title">${result1[i].date}</h5>
        <p class="card-text"><h5>LocalName:</h5>${result1[i].localName}</p>
        <p class="card-text"><h5>Name:</h5>${result1[i].name}</p>
      </div>
    </div>`
      
}}




async function countries(){
    let url=("https://date.nager.at/api/v3/AvailableCountries")
    let countryResult=await fetch(url)
    let countryResult1=await countryResult.json()
    for(let i=0; i<countryResult1.length; i++)
{
    let getCountry=document.getElementById("countryName").value
   if(getCountry===countryResult1[i].name){
    div1.innerHTML=`Your countryCode is: ${countryResult1[i].countryCode}`
   }

 }}

countries()