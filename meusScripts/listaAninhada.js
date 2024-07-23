document.querySelectorAll('[wm-folder]').forEach(folder => {
    folder.onclick = function (e){
        console.log('teste')
        const ul = folder.nextElementSibling
        const display = ul.style.display
        ul.style.display = display == 'none' ? 'block' : 'none'
    }
})