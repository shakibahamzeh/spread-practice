const heading=document.querySelector('h2');
// spread
const characters=[...heading.textContent];



const html = characters.map((char)=> `<span>${char}</span>`).join('');


heading.innerHTML=html;