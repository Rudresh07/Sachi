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

function selectDate() {
  // Get the date input element
  const dateInput = document.getElementById("SelectedDate");

  // Set the min attribute to today's date
  const today = new Date().toISOString().split('T')[0];
  dateInput.setAttribute('min', today);

  // Listen for the change event on the date input
  dateInput.addEventListener('change', (event) => {
      const selectedDate = event.target.value;
      document.getElementById('SelectedDate').innerHTML = `Selected date: ${selectedDate}`;
  });
}
