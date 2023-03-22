import "../styles/footer.css";


function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="box none">
          <div className="box-content"></div>
        </div>
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
        <div className="box none">
          <div className="box-content none"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
