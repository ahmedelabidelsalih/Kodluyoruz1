// fetch( 'https://randomuser.me/api/')
// .then(function(perponse){
//     return perponse.json();
// })
// .then(function(data){
//     console.log(data)
// })
//  old way


// in down modern way for fetch Api

async function giveMe(){
    const response = await fetch(`https://randomuser.me//api/1.3`);
    const myData = await response.json();
    
    const sc = myData.results[0].picture.large;
    const {title , first , last} = myData.results[0].name;
    const{country , city }= myData.results[0].location
    const age = myData.results[0].dob.age ;
    const{email , phone , cell }= myData.results[0]
    document.querySelector("img").src = sc;
    document.getElementById("name").innerHTML = ` ${first} ${last}`;
    document.getElementById("age").innerHTML = `Age: ${age} `;
    document.getElementById("counter").innerHTML = `Counter :  ${country}  / ${city}  `;
    document.getElementById("cell").innerHTML = `   ${phone}  / ${email}  `;
    document.getElementById("code").innerHTML = ` ID Code : ${cell}  `;
    let resulte = document.getElementById("resulte")
    age > 60
    ?resulte.innerHTML = `Resulte : ${title} ${first}   Old over (60) `
    :age > 50
    ?resulte.innerHTML = `Resulte : ${title} ${first}  bigger than (50) `
    :age > 40
    ?resulte.innerHTML = `Resulte : ${title} ${first}  bigger than (40)   `
    :age > 30 
    ?resulte.innerHTML = `Resulte : ${title} ${first}   bigger than (30)  `

    :resulte.innerHTML = `Resulte : ${title} ${first}  a young under (30) `
}
giveMe()


