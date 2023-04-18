import "../styles/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <a role="button" href="https://www.facebook.com/KXCJ1057/">
          <div className="box">
            <div className="box-content"></div>
          </div>
        </a>
        <div className="finalTwo">
        <div className="box">
          <div className="box-content-snail-mail"></div>
        </div>
        <div className="box">
          <div className="box-content-phone"></div>
        </div>
        
          <div className="box">
            <div className="box-content-email" id="gmail"></div>
          </div>
          <div className="box">
            <div className="box-content-radio" id="radio"></div>
          </div>
        </div>
        <a role="button" href="https://www.facebook.com/KXCJ1057/">
          <div className="box">
            <div className="box-content"></div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Footer;
