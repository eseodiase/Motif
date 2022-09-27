const nav = () => {
"use strict";
const allObjectsUsedOnHeader = {

//Navigation List
l1: "Motif",
l2: "Home",
l3: "About",
l4: "Connect",
l5: "Ese Odiase",

//developer's url:
url: "http://www.eseodiase.website/",

//nav icon:
bar: "&#9552;",

//className:
mobile: "menu_bar",

};
const all = allObjectsUsedOnHeader;

    return `<div>
    <label class="webLabel">
    Motif
    </label>
    
    <div class="navigate">
    
      <div class=${all.mobile}>${all.bar}</div>
    <ul>
    <li class="logo">${all.l1}</li>
<li class="home"><a href="#">${all.l2}</a></li>
<li class="about"><a href="#">${all.l3}</a></li>
<li class="connect"><a href="#">${all.l4}</a></li>
<li class="dev">
<img src="https://ipfs.fleek.co/ipfs/bafybeiansltfu2wrrorxdywurnpugc2kup6bycyuulurz7vc5avdibjqbu" width="50" height="50" style="border-radius:50%; background:#26292e;" alt="Dev"/>
    <br/>
    Developed by
    <a href=${all.url}>${all.l5}</a>
    </li>  
    </ul>
    
    </div>
 
           </div>`;
};
export default nav;
