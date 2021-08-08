const filterLinks = document.querySelectorAll(".filter-link")
const cards = document.querySelectorAll(".card")




cards.forEach((card) =>{
    filterLinks.forEach(filterLink =>{
        filterLink.addEventListener("click", (e)=>{
            e.preventDefault();
            filterLinks.forEach((item) =>{
                item.classList.remove("filter-link__active")
            })
    
            filterLink.classList.add("filter-link__active")
    
            let className = filterLink.getAttribute("href").slice(1,filterLink.getAttribute("href").length)
    
            if(className != "all"){
                for (let i of cards) {
                    if(!i.classList.contains(className)){
                        i.classList.add("none")
                    }
                    if(i.classList.contains(className)){
                        i.classList.remove("none")
                    }                    
                }
            }
            if(className == "all"){
                card.classList.remove("none")
            }
        })
    })
})