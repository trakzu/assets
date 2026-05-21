/* =========================
PROGRESSIVE IMAGE LOADER
========================= */

document.addEventListener("DOMContentLoaded",()=>{

const images =
document.querySelectorAll(".progressive-image");

images.forEach(img=>{

/* FULL IMAGE URL */

const fullImageSrc =
img.dataset.full;

if(!fullImageSrc) return;

/* INITIAL STYLE */

img.classList.add("progressive-loading");

/* PRELOAD HD IMAGE */

const hdImage = new Image();

hdImage.src = fullImageSrc;

hdImage.onload = ()=>{

/* SMOOTH REPLACE */

img.src = hdImage.src;

/* REMOVE BLUR */

img.classList.remove(
"progressive-loading"
);

img.classList.add(
"progressive-loaded"
);

};

});

});
