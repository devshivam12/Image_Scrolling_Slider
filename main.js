
// Declare variables

let scrollContainer = document.querySelector(".gallery");
let nextButton = document.getElementById("nextBtn")
let prevButton = document.getElementById("prevBtn")

// For scrolling effect on images

scrollContainer.addEventListener('wheel', (e)=>{
    scrollContainer.style.scrollBehavior = "auto" //set scroll behavior auto 

    e.preventDefault(); // this preventDefault is the behavior of the mouse scroll this is also affected whole page 

    scrollContainer.scrollLeft += e.deltaY // This deltaY adjusts the horizontal scroll position because we want whenever we set a mouse on images and scroll down and scroll up then images is changed there position by doing this.
})

// For Next button 

nextButton.addEventListener('click', ()=>{
    scrollContainer.style.scrollBehavior = "smooth" // for smooth scrolling effect
    scrollContainer.scrollLeft += 900; // This line increments the horizontal scroll position by 900 pixels, causing the container to scroll to the right.
})


// For Previuos button
 
prevButton.addEventListener('click', ()=>{
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft -= 900; // This line decrement the horizontal scroll position by 900 pixels, causing the container to scroll to the right.
})