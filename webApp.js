import header from "./components/header.js";
import nav from "./components/nav.js";
import home from "./components/home.js";
import about from "./components/about.js";
import contact from "./components/contact.js";
import allprojects from "./components/project/project.js";

const app=()=>{
    document.querySelector(".header").innerHTML = ( header() );
    document.querySelector(".nav").innerHTML = ( nav() );
    document.querySelector(".main").innerHTML = ( home() + about() + contact());
    
    //darkmode toggle :
   const dkm = document.querySelector(".darkmodeBtn");
   dkm.addEventListener("click", ()=>{
       const circle = document.querySelector (".circle");
       const bd = document.body;
       dkm.classList.toggle ("brightMode");
       circle.classList.toggle("toggleCirle");
       bd.classList.toggle("bodyColorChange");
   });
   
 //view more article on mobile version:   
 const content2 = document.querySelector(".content2");
 const box3 = document.querySelector(".box3");
 
 const more = document.querySelector(".more");
 more.addEventListener("click", ()=>{
 const hiddenArticle = document.querySelector(".hidden");
 hiddenArticle.style.display="block";
 more.style.display="none";
 content2.style.display="none";
 box3.style.display="block";
 });
 
  //view less article on mobile version:   
 const less = document.querySelector(".less");
 less.addEventListener("click", ()=>{
 const hiddenArticle = document.querySelector(".hidden");
 hiddenArticle.style.display="none";
 more.style.display="inline-block";
 content2.style.display="block";
 box3.style.display="none";
 });
 
 //web components
const homePage = document.querySelector(".homePage");
const aboutPage = document.querySelector(".aboutPage");
const contactPage = document.querySelector(".contactPage");
 
 //goto about page
const aboutlink = document.querySelector(".about");
 aboutlink.addEventListener("click", ()=>{
 homePage.style.display="none";
 aboutPage.style.display="block";
 contactPage.style.display="none";
 });
 
 //goto home page
const homelink = document.querySelector(".home");
 homelink.addEventListener("click", ()=>{
 homePage.style.display="block";
 aboutPage.style.display="none";
 contactPage.style.display="none";
 });
 
  //goto contact page
const contactlink = document.querySelector(".connect");
 contactlink.addEventListener("click", ()=>{
 homePage.style.display="none";
 aboutPage.style.display="none";
 contactPage.style.display="block";
 });
 
};
export default app;