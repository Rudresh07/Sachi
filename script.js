function loadMoreImages(numImages) {
  // Get all hidden images
  const hiddenImages = document.querySelectorAll('.hidden');

  // Loop through the hidden images and reveal only the specified number
  for (let i = 0; i < numImages && i < hiddenImages.length; i++) {
    hiddenImages[i].classList.remove('hidden');
  }

  // Check if there are any more hidden images
  const remainingHiddenImages = document.querySelectorAll('.hidden');
  if (remainingHiddenImages.length === 0) {
    // All images have been loaded, so hide the "Load More" button
    document.getElementById('load-more-btn').style.display = 'none';
  }
}



document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll("#gallery img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");

  images.forEach(image => {
      image.addEventListener("click", function() {
          lightbox.style.display = "block";
          lightboxImage.src = this.src;
      });
  });

  document.querySelector(".close").addEventListener("click", function() {
      lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", function(event) {
      if (event.target !== lightboxImage) {
          lightbox.style.display = "none";
      }
  });
});

