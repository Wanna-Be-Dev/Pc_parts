let parent = document.querySelectorAll('.animate-text');
for (let i = 0; i < parent.length; i++) {
    parent[i].style.width = parent[i].children[0].clientWidth + "px";
};

window.onscroll = function () { myFunction() };

function myFunction() {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        document.getElementById("ghost").className = "slideUp";
    } 
    else {
        document.getElementById("ghost").className = "";
    }
}


/////////////////////////////////cooler/////////////////////////////////////////////

let cooler_button = document.querySelector(".cooler_button");
let cooler_img = document.querySelector(".cooler");

cooler_button.addEventListener("mouseenter", function () {
    if (!cooler_img.classList.contains("active")) {
        cooler_img.classList.add("active");
    }
})

cooler_button.addEventListener("mouseleave", function () {
    if (cooler_img.classList.contains("active")) {
        cooler_img.classList.remove("active");
    }
})

/////////////////////////////////cpu/////////////////////////////////////////////

let cpu_button = document.querySelector(".cpu_button");
let cpu_img = document.querySelector(".cpu");

cpu_button.addEventListener("mouseenter", function () {
    if (!cpu_img.classList.contains("active")) {
        cpu_img.classList.add("active");
    }
})

cpu_button.addEventListener("mouseleave", function () {
    if (cpu_img.classList.contains("active")) {
        cpu_img.classList.remove("active");
    }
})
/////////////////////////////////gpu/////////////////////////////////////////////

let gpu_button = document.querySelector(".gpu_button");
let gpu_img = document.querySelector(".gpu");

gpu_button.addEventListener("mouseenter", function () {
    if (!gpu_img.classList.contains("active")) {
        gpu_img.classList.add("active");
    }
})

gpu_button.addEventListener("mouseleave", function () {
    if (gpu_img.classList.contains("active")) {
        gpu_img.classList.remove("active");
    }
})

/////////////////////////////////memory/////////////////////////////////////////////

let memory_button = document.querySelector(".memory_button");
let memory_img = document.querySelector(".memory");

memory_button.addEventListener("mouseenter", function () {
    if (!memory_img.classList.contains("active")) {
        memory_img.classList.add("active");
    }
})

memory_button.addEventListener("mouseleave", function () {
    if (memory_img.classList.contains("active")) {
        memory_img.classList.remove("active");
    }
})

/////////////////////////////////storage/////////////////////////////////////////////

let storage_button = document.querySelector(".storage_button");
let storage_img = document.querySelector(".storage");

storage_button.addEventListener("mouseenter", function () {
    if (!storage_img.classList.contains("active")) {
        storage_img.classList.add("active");
    }
})

storage_button.addEventListener("mouseleave", function () {
    if (storage_img.classList.contains("active")) {
        storage_img.classList.remove("active");
    }
})

/////////////////////////////////power_sup/////////////////////////////////////////////

let power_button = document.querySelector(".power_button");
let power_img = document.querySelector(".power_sup");

power_button.addEventListener("mouseenter", function () {
    if (!power_img.classList.contains("active")) {
        power_img.classList.add("active");
    }
})

power_button.addEventListener("mouseleave", function () {
    if (power_img.classList.contains("active")) {
        power_img.classList.remove("active");
    }
})


