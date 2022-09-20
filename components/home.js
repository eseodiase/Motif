const home =()=>{
const homeObj = {
    //content1
       content1Title: "ART DISPLAY", 
       content1Article1: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam lectus risus, pellentesque vitae nisi quis, rutrum blandit massa. Ut tincidunt ultrices molestie. Rutrum blandit massa.",
       content1Article2: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam lectus risus, pellentesque vitae nisi quis, rutrum blandit massa. Ut tincidunt ultrices molestie. Rutrum blandit massa.",
       
       //content2
        callToAction: "Explore Now",
        subTitle: "Discover",
        hash: "CREATIVE HASHTAGE »",
        tag: "#designbyese",
    }        

return `<section class="homePage">

<!-- topContainer class is wrapping content1 & content2 -->
            <div class="topContainer">
            
            <div class="content1">
            <div class="subContent1">
             <h1>${homeObj.content1Title}</h1>
             
            <p>
             ${homeObj.content1Article1}<span class="more">
                 .. Read more
            <i class="fa fa-chevron-right"></i>
                                        </span>
            </p>
                 
            <p class="hidden">
            ${homeObj.content1Article2}
            <span class="less">
            Read less
            <i class="fa fa-chevron-up"></i>
            </span>
            </p>
                 
                 <button type="button">
                 ${homeObj.callToAction}
                 </button>
            </div>
            </div>
             
            <div class="content2">
            <div class="subContent2">
   <h3>${homeObj.subTitle}</h3>
   <iframe src="https://eseodiase.github.io/Motif/components/project/project.html" class="nftAction"></iframe>
   <p>« Explore more projects »</p>
            </div>
            </div>
            
            </div>
<!-- topContainer class ends here -->
   
    <div class="box1">
    <p>${homeObj.hash}</p>
    </div>
    
    <div class="box2">
    <p>${homeObj.tag}</p>
    </div>
    
    <div class="box3">
    <i class="fa fa-twitter"></i>
    <i class="fa fa-instagram"></i>
    <i class="fa fa-youtube"></i>
    <i class="fa fa-whatsapp"></i>
    <i class="fa fa-facebook"></i>
    </div>
                 
             </section>`;
}    
export default home;
