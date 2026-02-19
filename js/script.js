const sections = document.querySelectorAll('section')
// for(const section of sections){
//     console.log(section)
//     section.style.backgroundColor = 'lightblue'
//     section.style.border = '3px solid gray'
//     section.style.marginBottom = '5px'
//     section.style.borderRadius = '15px'
//     section.style.padding = '10px'
// }

for(const section of sections){
    section.classList.add('section-card')
}