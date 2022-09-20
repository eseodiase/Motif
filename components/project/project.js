const allprojects =()=>{
            const iframe0 =()=>{
                return`<div class="iframe" id="one" >
                <div class="card">
                <img src="images/motifProject1.png" class="pic" alt="project1"/>
                </div>
                <p>
                Project One
                <br/>
                <span class="languages">
                The Subtitle
                </span>
                </p>
                </div>`;
            }

            //
            const iframe1 =()=>{
                return`<div class="iframe">
                <div class="card">
                <img src="images/motifProject2.png" class="pic" alt="project2"/>
                </div>
                <p>
                Project Two
                <br/>
                <span class="languages">
                The Subtitle
                </span>
                </p>
                </div>`;
            }
            
            //
            const iframe2 =()=>{
                return`<div class="iframe">
                <div class="card">
                <img src="images/motifProject3.png" class="pic" alt="project3"/>
                </div>
                <p>
                Project Three
                <br/>
                <span class="languages">
                The Subtitle
                </span>
                </p>
                </div>`;
            }
            
            //
                const iframe3 =()=>{
                return`<div class="iframe">
                <div class="card">
                <img src="images/motifProject4.png" class="pic" alt="project4"/>
                </div>
                <p>
                Project Four
                <br/>
                <span class="languages">
                The Subtitle
                </span>
                </p>
                </div>`;
            }

            //
            const iframe4 =()=>{
                return`<div class="iframe">
                <div class="card">
                <img src="images/motifProject5.png" class="pic" alt="project5"/>
                </div>
                <p>
                Project Five
                <br/>
                <span class="languages">
                The Subtitle
                </span>
                </p>
                </div>`;
            }
            
            //
            const iframe5 =()=>{
                return`<div class="iframe">
                <div class="card">
                <img src="images/motifProject6.png" class="pic" alt="project6"/>
                </div>
                <p>
                Project Six
                <br/>
                <span class="languages">
                The Subtitle
                </span>
                </p>
                </div>`;
            }
            
            const allFrames =()=>{
              document.querySelector(".projectIframe").innerHTML = ( iframe0 () + iframe1 () + iframe2() + iframe3() + iframe4() + iframe5());
            }
            allFrames();
}
export default allprojects;
