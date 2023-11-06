import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div>
          <h1>
            Hi I'm <span>Nikhil</span>
          </h1>
          <p>
            I'm a Web & Mobile Designer, Webflow Developer, and Data Analyst.
            I'm open and ready to take new project
          </p>
          <Link href={"#project-secion"} className="btn">
            See My Work Below
          </Link>
        </div>
      </section>

      {/* Projects Section */}
      <section className="project-wrapper" id="project-section">
        <figure>
          <div className="img-container">
            <Image src={"/money_reporter.png"} alt="Money Reporter" fill />
          </div>
          <figcaption>
            <h2>
              <span>Money Reporter</span> Website Design & Build
            </h2>

            <Link href={"/portfolio/money-reporter"} className="btn">
              See This Project
            </Link>
          </figcaption>
        </figure>

        <figure>
          <div className="img-container">
            <Image src={"/curlylogic.png"} alt="Curlylogic" fill />
          </div>
          <figcaption>
            <h2>
              <span>Curlylogic</span> Website Design
            </h2>

            <Link href="https://www.curlylogic.dev" className="btn">
              See Live Website
            </Link>
          </figcaption>
        </figure>

        <figure>
          <div className="img-container">
            <Image
              src={"/cardiovascular.png"}
              alt="Cardiovascular Disease Risk patient"
              fill
              priority
            />
          </div>
          <figcaption>
            <h2>
              <span>Cardiovascular Disease Risk patient</span> Data Analysis &
              ML Model
            </h2>

            <Link
              href={"/portfolio/cardiovascular-disease-risk"}
              className="btn"
            >
              See This Project
            </Link>
          </figcaption>
        </figure>

        <figure>
          <div className="img-container">
            <Image src={"/bluebox.png"} alt="Bluebox" fill />
          </div>
          <figcaption>
            <h2>
              <span>BlueBox</span> Website Design
            </h2>

            <Link href={"/portfolio/bluebox"} className="btn">
              See This Project
            </Link>
          </figcaption>
        </figure>

        <figure>
          <div className="img-container">
            <Image
              src={"/cardiovascular.png"}
              alt="Cardiovascular Disease Risk patient"
              fill
            />
          </div>
          <figcaption>
            <h2>
              <span>Cardiovascular Disease Risk patient</span> Data Analysis &
              ML Model
            </h2>

            <Link href={"/"} className="btn">
              See This Project
            </Link>
          </figcaption>
        </figure>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>What I do</h2>
        <div className="service-wrapper">
          <figure>
            <div className="img-container">
              <Image src={"/design.svg"} alt="Design" fill className="img" />
            </div>
            <figcaption>
              <h3>Design</h3>
              <p>
                Be it website or mobile app design, my clients get the product
                that has the best combination of outstanding user experience and
                visual aesthetics.
              </p>
            </figcaption>
          </figure>

          <figure>
            <div className="img-container">
              <Image src={"/webflow.svg"} alt="Website Development" fill />
            </div>
            <figcaption>
              <h3>Website Development</h3>
              <p>
                Using Webflow I am able to deliver a fully responsive website
                with a clean, semantic code. This lets my clients cut huge costs
                on development. Read more about Webflow here.
              </p>
            </figcaption>
          </figure>

          <figure>
            <div className="img-container">
              <Image src={"/data.svg"} alt="Data Analysis" fill />
            </div>
            <figcaption>
              <h3>Data Analysis, Viz & ML</h3>
              <p>
                By using provided data, I am able to empower you to take
                data-driven decision based on Data Analysis, Visualisation & ML
                rather than taking decision randomly.
              </p>
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
