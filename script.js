// Small JS for interactivity and Netlify success handling
document.getElementById('year')?.textContent = new Date().getFullYear();
document.getElementById('year-about')?.textContent = new Date().getFullYear();
document.getElementById('year-services')?.textContent = new Date().getFullYear();
document.getElementById('year-success')?.textContent = new Date().getFullYear();
document.getElementById('year-contact-page')?.textContent = new Date().getFullYear();

// Simple nav toggle for small screens
document.querySelectorAll('.nav-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav').forEach(nav => {
      if (nav.style.display === 'flex') nav.style.display = '';
      else nav.style.display = 'flex';
    });
  });
});

// If hosted on Netlify, after form submission Netlify redirects to /?success=true
if (location.search.includes('success=true')){
  alert('Thank you — your enquiry has been received. We will contact you soon.');
}
