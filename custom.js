// AOS Initialization
AOS.init({ duration: 1000, once: true });

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav').querySelector('ul');
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Main Swiper Slider
new Swiper(".mySwiper", {
  loop: true,
  pagination: { el: ".swiper-pagination", clickable: true },
  autoplay: { delay: 3000, disableOnInteraction: false }
});

// Skill Counter Animation 
const skillCounter = document.getElementById('counter');
animateCounter(skillCounter, 150, 20);

// Why Choose Us Counter Animation 
const awardCounter = document.getElementById('awardCounter');
animateCounter(awardCounter, 35, 20);

// General Counter Animation Function
function animateCounter(element, target, speed) {
  let count = 0;
  const interval = setInterval(() => {
    if (count < target) {
      count++;
      element.innerText = count + '+';
    } else {
      clearInterval(interval);
    }
  }, speed);
}

// Skill Progress Bar Animation
const progressObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.bar-fill').forEach(fill => {
        fill.style.width = fill.getAttribute('data-width');
      });
      progressObserver.disconnect();
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.bar-fill').forEach(bar => progressObserver.observe(bar));

// Accordion Toggle
document.querySelectorAll('.accordion-item').forEach(item => {
  const title = item.querySelector('.title');
  title.addEventListener('click', () => {
    document.querySelectorAll('.accordion-item').forEach(i => {
      if (i !== item) {
        i.classList.remove('active');
        i.querySelector('.title span').textContent = '+';
      }
    });
    item.classList.toggle('active');
    title.querySelector('span').textContent = item.classList.contains('active') ? '-' : '+';
  });
});

// Gallery Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const filterItems = document.querySelectorAll('.filter-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    filterItems.forEach(item => {
      item.style.display = (filter === 'all' || item.classList.contains(filter)) ? 'block' : 'none';
    });
  });
});

// Multiple Counter Animations 
document.querySelectorAll('.counter-number').forEach(counter => {
  counter.innerText = '0';
  const update = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;
    const increment = target / 200;
    if (current < target) {
      counter.innerText = `${Math.ceil(current + increment)}`;
      setTimeout(update, 10);
    } else {
      counter.innerText = target;
    }
  };
  update();
});

// Testimonial Swiper Slider
new Swiper(".mySwiper1", {
  loop: true,
  autoplay: { delay: 3000, disableOnInteraction: false },
  pagination: { el: ".swiper-pagination", clickable: true }
});

// Scroll Events (Header Fixed & Back to Top Button)
window.onscroll = () => {
  document.getElementById("mainHeader").classList.toggle("fixed", scrollY > 100);
  document.getElementById("backToTop").style.display = scrollY > 300 ? "block" : "none";
};

// Back to Top Smooth Scroll
document.getElementById("backToTop").onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
