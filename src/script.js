// Function to check if an element is in the viewport
export const isInViewport = (element, offset = 100) => {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset &&
    rect.bottom >= offset
  );
};

// Function to add animation class when element is in viewport
export const animateOnScroll = () => {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  elements.forEach(element => {
    if (isInViewport(element)) {
      element.classList.add('animate-fade-in');
    }
  });
};

// Add scroll event listener
export const initScrollAnimation = () => {
  window.addEventListener('scroll', animateOnScroll);
  // Initial check
  animateOnScroll();
};
