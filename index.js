const loader = document.querySelector('.loader')

window.onload = ()=>{
    setTimeout(() => {
        loader.style.display = 'none'
    }, 1500);
}