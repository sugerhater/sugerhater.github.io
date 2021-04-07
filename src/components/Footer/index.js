import React from "react";
import "./style.css";
const Footer = () => {
  return(
    <footer id="contact">
    <h2>Contact me!</h2>
    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kehong-li-aa26b5136/">
        <i class="fab fa-linkedin"></i>
    </a>
    <a target="_blank" rel="noopener noreferrer" href="https://github.com/sugerhater">
        <i class="fab fa-github"></i>
    </a>
    <a target="_blank" rel="noopener noreferrer" href="kehong0926@gmail.com">
        <i class="fas fa-envelope"></i>
    </a>
    <a target="_blank" rel="noopener noreferrer" href={`${process.env.PUBLIC_URL}/assets/NewKehongLiResume.pdf`}>
        <i class="fas fa-file-pdf"></i>
    </a>
    <a target="_blank" rel="noopener noreferrer" href="tel:614-290-5327">
        <i class="fas fa-phone-volume"></i>
    </a>
</footer>
  )
}

export default Footer;