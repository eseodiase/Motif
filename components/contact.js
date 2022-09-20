const contact = ()=>{
    return `<section class="contactPage">
    <form method="POST" name="Contact Form" class="cntForm">
    
<!-- contactForm div wrap beginning -->
<div class="contactForm">
<h3 class="formH3">Get in Touch</h3>

<!-- contactInput beginning -->
<br/>
<div class="contactInput">
<label><i class="fa fa-user"></i></label>
<input type ="text" name="Name" class="cFormInput" placeholder="Your name" required/>

<hr class="formHr">
<label><i class="fa fa-at"></i></label>
<input type ="email" name="Email" class="cFormInput" placeholder="Your e-mail" required/>

<hr class="formHr">
<label class="txtA">
<i class="fa fa-envelope"></i>
</label>
<textarea name="Message" placeholder="Your message" class="cFormTxtArea" rows="6" cols="30" required></textarea> <br />

<hr class="formHr">
</div>
<!-- contactInput ending-->

<button type="submit" class="sendBtn">Send</button>
</div>
<!-- contactForm div wrap ending -->

</form>
</section>`   ;
}
export default contact;