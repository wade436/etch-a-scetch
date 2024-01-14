const btn = document.querySelector('#btn')
let grid = 16
btn.addEventListener('click', ()=>{
   grid = parseInt(prompt("enter the grid dimentions "))
   console.log(grid)
   return grid 
})

//connecting to main div in html file 
const main = document.querySelector('#container');
//attributes added to main div to make the divs wrap around in order to have a grid
main.style.cssText = 'display:flex; flex-wrap:wrap; margin-left:35%; height:160px; width:160px;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);';

//loop to create 256 identical divs 
for(let i = 0; i < (grid * grid); i++){
    const div = document.createElement('div');
    div.style.cssText = 'height:10px; width:10px; background-color:white;';

    div.addEventListener('mouseenter', ()=>{
        div.style.backgroundColor ='black';
    })
    main.appendChild(div)
}

