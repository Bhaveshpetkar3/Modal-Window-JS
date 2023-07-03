'use strict';
const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const showmodal=document.querySelectorAll('.show-modal');
const closemodal=document.querySelector('.close-modal');
for(let i=0;i<showmodal.length;i++)
{
    showmodal[i].addEventListener('click',function()
    {
        overlay.classList.remove('hidden');
        modal.classList.remove('hidden');
        
    })
}
function closethemodal()
{
     modal.classList.add('hidden');
     overlay.classList.add('hidden');
}
closemodal.addEventListener('click',closethemodal);
overlay.addEventListener('click',closethemodal);
document.addEventListener('keydown',function(event)
{
    if(event.key==='Escape' && !modal.classList.contains('hidden'))
    {
        closethemodal();
    }
})