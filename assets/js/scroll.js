// BACKGROUND PROJECT SHOW - My own code
const element = document.getElementById("display--sky"); // Replace with the actual ID of your element
const startScrollThreshold = .9; // Adjust this value (0 to 1) for starting point

window.addEventListener("scroll", function() {
  const scrolled = window.scrollY;
  const viewportHeight = window.innerHeight;
  const responsiveStartPoint = viewportHeight * startScrollThreshold;
  const scrollProgress = Math.min(1, (scrolled - responsiveStartPoint) / (document.documentElement.scrollHeight - viewportHeight));

  if (scrolled >= responsiveStartPoint) {
    const opacity = scrollProgress * 3; // Opacity increases with scroll progress
    element.style.opacity = opacity;


  }
});


// BACLGROIND STICK -- My own code
const container = document.getElementById('sticky--elements');
const stickyElement = document.getElementById('sticky--container');

window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    const containerTop = container.offsetTop;
    const containerHeight = container.offsetHeight;
    const elementHeight = stickyElement.offsetHeight;

    const minValue = containerTop;
    const maxValue = containerTop + containerHeight - elementHeight + 0;

    let value = Math.min(Math.max(scrollTop, minValue), maxValue);
    stickyElement.style.transform = `translateY(${value - containerTop}px)`;
}); 

