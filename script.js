async function searchNationality(namequery){
  const url=`https://api.nationalize.io/?name=${namequery}`;
 await fetch(url)
.then(response=>response.json())
.then((jsondata)=>{
const result=jsondata.country.map(element=>("NATIONALITY :"+element.country_id+"/"+" "+"PROBABILITY VALUE :"+element.probability))
   //console.log(result);
    renderesults(result)
    document.getElementById("divid").innerHTML=''
  })
    .catch((error)=>{document.getElementById("divid").innerHTML=error
           renderesults([])         
                    })     
}
//function to display on screen
function renderesults(result){
   let div=document.createElement('div')
  document.body.append(div);
  div.setAttribute('id','divid')
  const list=document.createElement('ul')
document.body.append(list)
list.setAttribute('id','listid')
  const ollist=document.getElementById("listid")
  ollist.innerHTML="";
  result.forEach(re=>{
    const element=document.createElement('li')
    element.setAttribute('id','listid')
    list.append(ollist)
    element.innerText=re;
    ollist.append(element)
  })
}
//perfect code 
const container=document.createElement('div')
container.setAttribute('id','conid')
const title=document.createElement('h1')
title.innerText='SearchNationality';
//document.body.append(title)
const input=document.createElement('input')
input.setAttribute('type','text')
input.setAttribute('id','searchfields')
input.setAttribute('placeholder','     Search By Name')
container.append(title,input)
document.body.append(container)

//document.body.append(input)
let searchtimeout=0
window.onload=()=>{
  const searchfeildelement=document.getElementById("searchfields")
  searchfeildelement.onkeyup=(event)=>{
    clearTimeout(searchtimeout)
    if(searchfeildelement.value.trim().length==0){
      return;
    }
    searchtimeout=setTimeout(()=>{
      searchNationality(searchfeildelement.value)
    },250)
    
  }
}


