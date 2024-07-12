document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
      item.addEventListener('click', () => {
          item.classList.toggle('active');

          // Adjust max-height for animation
          const content = item.querySelector('.faq-content');
          if (item.classList.contains('active')) {
              content.style.maxHeight = content.scrollHeight + "px";
          } else {
              content.style.maxHeight = 0;
          }
      });
  });
});
