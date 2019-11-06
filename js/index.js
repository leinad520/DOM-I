const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navLinks = document.querySelectorAll('a');
navLinks.forEach((i, index) => i.textContent = siteContent["nav"][`nav-item-${index+1}`]);
navLinks.forEach(i => i.style.color = 'green');

let navParent = document.querySelector('nav');
let child1 = document.createElement('a');
child1.style.color = 'green';
child1.textContent = 'More About Dan'
let prepend2 = document.createElement('a');
prepend2.style.color = 'green'
prepend2.textContent = 'WOWW';
navParent.appendChild(child1);
navParent.prepend(prepend2);

document.querySelector('.cta-text').querySelector('h1').textContent = siteContent["cta"]["h1"];

document.querySelector('.cta-text').querySelector('button').textContent = siteContent["cta"]["button"];

document.querySelector('#cta-img').setAttribute('src', siteContent["cta"]["img-src"]);

let topHeaders = document.querySelectorAll('.top-content h4');
topHeaders[0].textContent = siteContent["main-content"]["features-h4"];
topHeaders[1].textContent = siteContent["main-content"]["about-h4"];

let topContent = document.querySelectorAll('.top-content p');
topContent[0].textContent = siteContent["main-content"]["features-content"];
topContent[1].textContent = siteContent["main-content"]["about-content"];

document.querySelector('#middle-img').setAttribute('src', siteContent['main-content']['middle-img-src']);

let bottomHeaders = document.querySelectorAll('.bottom-content h4');
bottomHeaders[0].textContent = siteContent["main-content"]["services-h4"];
bottomHeaders[1].textContent = siteContent["main-content"]["product-h4"];
bottomHeaders[2].textContent = siteContent["main-content"]["vision-h4"];


let bottomContent = document.querySelectorAll('.bottom-content p');
bottomContent[0].textContent = siteContent["main-content"]["services-content"];
bottomContent[1].textContent = siteContent["main-content"]["product-content"];
bottomContent[2].textContent = siteContent["main-content"]["vision-content"];

document.querySelector('.contact h4').textContent = siteContent["contact"]["contact-h4"];
let contactContent = document.querySelectorAll('.contact p');
contactContent[0].textContent = siteContent["contact"]["address"];
contactContent[1].textContent = siteContent["contact"]["phone"];
// contactContent[2] = siteContent["contact"]["email"];

