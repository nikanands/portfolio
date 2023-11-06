import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <h3>Say hi, to Nikhil</h3>
      <p>
        If you are looking for a web designer, web developer, data analyst or
        data viz expert, send me an email.
      </p>
      <Link
        href={"mailto:i.nikhilanand@gmail.com"}
        target="_blank"
        rel="noreferrer noopener"
        className="btn"
      >
        Send me an email
      </Link>
      <p className="copyright">&copy; 2023 Nikhil Anand</p>
    </footer>
  );
};

export default Footer;
