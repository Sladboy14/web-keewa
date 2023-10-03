// Select all elements with the "hidden" class
const hiddenElements = document.querySelectorAll('.hidden');

// Create an Intersection Observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // When an element is in the viewport, remove the "hidden" class to reveal it
      entry.target.classList.remove('hidden');
      entry.target.classList.add('show');
      // Unobserve the element to prevent multiple triggers
      observer.unobserve(entry.target);
    }
  });
});

// Observe each "hidden" element
hiddenElements.forEach(element => {
  observer.observe(element);
});
