import { articles } from "./articles.js"

document.addEventListener("click", function(event){
    if (event.target.id === "view-more-btn") {
        renderMoreBlogs()
    } else if (event.target.id === "burger-btn") {
        renderDropdown()
    } else if (event.target.id === "home-btn") {
        renderBlogs()
    }
})

function renderMoreBlogs() {
    for (let i=3; i < articles.length; i++) {
        document.getElementById("blogs").innerHTML += 
    `<div class="blog-container margin-bottom">
        <img class="article-image" src="${articles[i].imagePath}" alt="computer with code in view of camera.">
        <p class="blog-dates">${articles[i].date}</p>
        <h2 class="blog-no">${articles[i].no}</h2>
        <p class="blog-desc">${articles[i].desc}</p>
    </div>`
    }
    document.getElementById("view-more-btn").style.display = "none"
}

function renderDropdown() {
    document.getElementById("burger-btn").style.display = 'none'
    document.getElementById("home-btn").style.display = 'block'
    document.getElementById("about-btn").style.display = 'block'
    
    document.getElementById("home-btn").style.position = 'absolute'
    document.getElementById("home-btn").style.right = '30px'
    document.getElementById("home-btn").style.top = '25px'
    
    document.getElementById("about-btn").style.position = 'absolute'
    document.getElementById("about-btn").style.right = '20px'
    document.getElementById("about-btn").style.top = '45px'
}

function renderBlogs() {
    let html = ""
    for (let i=0; i < 3; i++) {
        html += 
    `<div class="blog-container margin-bottom">
        <img class="article-image" src="${articles[i].imagePath}" alt="computer with code in view of camera.">
        <p class="blog-dates">${articles[i].date}</p>
        <h2 class="blog-no">${articles[i].no}</h2>
        <p class="blog-desc">${articles[i].desc}</p>
    </div>`
    }
    document.getElementById("blogs").innerHTML = html
    
    if (document.getElementById("view-more-btn")) {
        document.getElementById("view-more-btn").style.display = document.getElementById("view-more-btn").style.display === 'none' ?  'block' : ''
    }
}

renderBlogs()