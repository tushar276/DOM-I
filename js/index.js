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


// const title = document.getElementsByTagName("title");
// title.text = "Hello there"
// console.log(title);

const menuitems = document.querySelectorAll("nav a");
var i = 0;
menuitems.forEach((ele) => {
  i++;
  ele.textContent = siteContent.nav["nav-item-"+i];
});

const logoimg = document.getElementById("logo-img");
logoimg.setAttribute("src", siteContent["nav"]["img-src"]);

const ctatext = document.querySelectorAll(".cta-text");
ctatext[0].children[0].textContent = siteContent["cta"]["h1"];
ctatext[0].children[1].textContent = siteContent["cta"]["button"];

const ctaimg = document.getElementById("cta-img");
ctaimg.setAttribute("src", siteContent["cta"]["img-src"]);


const maintopcontent = document.getElementsByClassName("top-content");
maintopcontent[0].children[0].children[0].textContent = siteContent["main-content"]["features-h4"];
maintopcontent[0].children[0].children[1].textContent = siteContent["main-content"]["features-content"];
maintopcontent[0].children[1].children[0].textContent = siteContent["main-content"]["about-h4"];
maintopcontent[0].children[1].children[1].textContent = siteContent["main-content"]["about-content"];

const middleimg = document.getElementById("middle-img");
middleimg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);


const mainbottomcontent = document.getElementsByClassName("bottom-content");
mainbottomcontent[0].children[0].children[0].textContent = siteContent["main-content"]["services-h4"];
mainbottomcontent[0].children[0].children[1].textContent = siteContent["main-content"]["services-content"];
mainbottomcontent[0].children[1].children[0].textContent = siteContent["main-content"]["product-h4"];
mainbottomcontent[0].children[1].children[1].textContent = siteContent["main-content"]["product-content"];
mainbottomcontent[0].children[2].children[0].textContent = siteContent["main-content"]["vision-h4"];
mainbottomcontent[0].children[2].children[1].textContent = siteContent["main-content"]["vision-content"];


const contact = document.getElementsByClassName("contact");
contact[0].children[0].textContent = siteContent["contact"]["contact-h4"];
contact[0].children[1].textContent = siteContent["contact"]["address"];
contact[0].children[2].textContent = siteContent["contact"]["phone"];
contact[0].children[3].textContent = siteContent["contact"]["email"];

const copyright = document.querySelectorAll("footer");
copyright[0].children[0].textContent = siteContent["footer"]["copyright"];



const navblock = document.querySelectorAll("nav");
const newmenuitem1 = document.createElement('a');
newmenuitem1.textContent = "Blog";
navblock[0].appendChild(newmenuitem1);

const newmenuitem2 = document.createElement('a');
newmenuitem2.textContent = "Photos";
navblock[0].appendChild(newmenuitem2);

const navitems = document.querySelectorAll("nav a");
navitems.forEach((e) => {
  e.style.color = "green";
});