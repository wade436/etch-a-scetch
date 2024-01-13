//connecting to main div in html file 
const main = document.querySelector('#container');
//attributes added to main div to make the divs wrap around in order to have a grid
main.setAttribute('style','background-color: blue;display:flex; flex-wrap:wrap; height:480px; width:480px;');

//loop to create 256 identical divs 
for(let i = 0; i < 256; i++){
    const div = document.createElement('div');
    div.setAttribute('style', 'height:30px; width:30px; background-color:pink;')
    div.addEventListener('hover', ()=>{
        div.setAttribute('style', 'background-color:black;')
    })
    main.appendChild(div)
}