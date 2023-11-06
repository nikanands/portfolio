import Image from "next/image";
import Link from "next/link";

function copyEmail() {
  navigator.clipboard.writeText("i.nikhilanand@gmail.com");
}

const Header = () => {
  return (
    <header className="header">
      <Link href={"/"} className="logo">
        <Image
          src={"/logo.svg"}
          alt="Nikhil Anand"
          width={305}
          height={70}
          priority={true}
        />
      </Link>
      <Link href={"#project-section"} className="link">
        Portfolio
      </Link>
      <Link
        href={"mailto:i.nikhilanand@gmail.com"}
        target="_blank"
        rel="noreferrer noopener"
        className="btn"
      >
        Email Me
      </Link>
    </header>
  );
};

export default Header;
