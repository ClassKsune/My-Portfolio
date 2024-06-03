const tv = document.getElementById("tv--style") 
const tvChange = document.getElementById("project--placeholder")
const projectBtn = document.getElementsByClassName("project--name")

const interval = setInterval(function() {
  tv.dataset.switch = "false"
  }, 1000);

function project(img) {
    tv.dataset.switch = "true"

    tvChange.style.backgroundImage = `url("${img}")`
}
