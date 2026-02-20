import "./footer.css";

export default function Footer() {

  return (

    <footer className="footer">

      <div className="footer-container">

        {/* LEFT SIDE SOCIAL ICONS */}
        <div className="footer-left">

          <h3>Quick Links</h3>

          <div className="social-icons">

            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="icon instagram">
              <i className="fab fa-instagram"></i>
            </a>

            <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="icon whatsapp">
              <i className="fab fa-whatsapp"></i>
            </a>

            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="icon youtube">
              <i className="fab fa-youtube"></i>
            </a>

            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="icon facebook">
              <i className="fab fa-facebook-f"></i>
            </a>

          </div>

          {/* CONTACT INFO */}
          <div className="contact-info">

            <p>📞 +91 99999 99999</p>
            <p>📍 Khad Bathlour, Punjab, India</p>
            <p>✉ khadbathlourfc@email.com</p>

          </div>

        </div>


        {/* RIGHT SIDE GOOGLE MAP */}
        <div className="footer-right">

          <h3>Our Location</h3>

          <iframe
            src="https://www.google.com/maps?q=Rupnagar,Punjab,India&output=embed"
            className="map"
            loading="lazy"
          ></iframe>

        </div>

      </div>


      {/* COPYRIGHT */}
      <div className="footer-bottom">
        © 2026 Khad Bathlour FC. All Rights Reserved.
      </div>

    </footer>

  );

}