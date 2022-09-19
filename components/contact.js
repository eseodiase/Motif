const contact = ()=>{
    return `<section class="contactPage">
    <form method="POST" name="Contact Form" class="cntForm">
<div class="contactForm">
<h3 class="formH3">Get Intouch With Us</h3>

<br/>
<div class="contactInput">
<label><i class="fa fa-user"></i></label>
<input type ="text" name="Name" class="cFormInput" placeholder="Your name" required/>

<hr class="formHr">
<label><i class="fa fa-at"></i></label>
<input type ="email" name="Email" class="cFormInput" placeholder="Your e-mail" required/>

<hr class="formHr">
<label><i class="fa fa-envelope"></i></label>
<textarea name="Message" placeholder="Your message" class="cFormTxtArea" rows="6" cols="30" required></textarea> <br />

<hr class="formHr">
</div>
<button type="submit" class="sendBtn">Send</button>
</div>
</form>
</section>`   ;
}
export default contact;