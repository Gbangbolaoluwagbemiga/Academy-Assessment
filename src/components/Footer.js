import logo from '../Images/Academy.png';
import certificate from '../Images/certificate.png';

function Footer() {
  return (
    <div className="footer mt-md-5 row">
      <div className="top-footer row">
        <p className="text col-10 me-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
          rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
          euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
          Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien
          faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper
          velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius
          duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam
          maecenas sed enim. Velit ut tortor pretium
        </p>
        <p className="logo-container col-1 ms-auto">
          <img
            src={logo}
            alt="logo"
            className="col-12 logo text-center ms-4 "
          />
          <h4 className="fw-bold text-logo ">ACADEMY</h4>
        </p>
      </div>

      <div className="row center-footer">
        <div className="col-5 certificate">
          <p className="certificate-header">MEMBERSHIP CERTIFICATE</p>
          <img src={certificate} alt="certificate" />
        </div>

        <div className="col-2 categories">
          <p className="categories-header">CATEGORIES</p>
          <div className="links">
            <p>Designing</p>
            <p>Programming</p>
            <p>Graphics</p>
            <p>Front End</p>
            <p>Composition</p>
            <p>Tailoring</p>
            <p>Database</p>
            <p>Sport</p>
            <p>Cooking</p>
            <p>Drving</p>
            <p>Photography</p>
            <p>Camerawork</p>
          </div>
        </div>
        <div className="col-2">
          <p className="categories-header">QUICK ACCESS</p>
          <div className="quick-access">
            <p>What we offer </p>
            <p>Careers</p>
            <p>Leadership</p>
            <p>About</p>
            <p>Catalog</p>
            <p>Degrees</p>
            <p>For Enterprises</p>
            <p>For Government</p>
            <p>For Campus</p>
            <p>Become A Partner</p>
            <p>Terms</p>
            <p>Accessibility</p>
          </div>
        </div>

        <div className="col-3 new-comment">
          <p className="">NEW COMMENT</p>
          <div className="comment-content">
            <p className="comment-header fw-bold">Ellsmartx</p>
            <p className="comment-text">
              How Nice Does This Look 😍 I Feel It should Be Delicious,..{' '}
            </p>
          </div>
          <div className="comment-content">
            <p className="comment-header fw-bold">Cassia</p>
            <p className="comment-text">
              Take A Rest, I'll Be Cheer Up You Again In 2 Next Game Go G...{' '}
            </p>
          </div>
          <div className="comment-content">
            <p className="comment-header fw-bold">Amanda</p>
            <p className="comment-text">
              You Were Stunning Today, Jan! 💗 Great Match 👍👍{' '}
            </p>{' '}
          </div>
          <div className="comment-content">
            <p className="comment-header fw-bold">Denis Simonassi</p>
            <p className="comment-text">
              It Was A Great Match Today Janzi! You Did Great😉{' '}
            </p>{' '}
          </div>
        </div>
      </div>

      <footer className="text-end">All Copyright (C) 2022 Reserved</footer>
    </div>
  );
}

export default Footer;
