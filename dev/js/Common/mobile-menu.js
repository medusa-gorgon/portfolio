const pageMap = {
  '#home': '.hero',
  '#about': '.about',
  '#portfolio': '.portfolio',
  '#blog': '.blog',
  '#contact': '.contact',
};

const handlePage = () => {
  const pageName = pageMap[window.location.hash];
  if (pageName) {
    const page = document.querySelector(pageName);
    page.scrollIntoView({ behavior: 'smooth' });
  }
};

handlePage();
window.addEventListener('hashchange', handlePage);
