import Image from "next/image";

const Page = () => {
  return (
    <div className="design-content-container">
      <h1>Money Reporter</h1>
      <h2>Website Design & Build</h2>
      <p>
        A website designed and build for B2C platform. This is just the landing
        page out of the full website.{" "}
        <span>
          The target for this business is all customer using online payment
          methods and are tired of excessive expenses. That's why the name Money
          Reporter. It will help you in day to day payments and also saving
          money via telling your expenses and all other reports.
        </span>
      </p>
      <figure>
        <Image
          src={"/money_reporter_full.png"}
          alt="Money Reporter"
          fill
          // sizes="(max-width: 1200px) 80rem, (max-width: 1000px) 100%, (max-width: 810px) 70vw"
          sizes="100%"
        />
      </figure>
    </div>
  );
};

export default Page;
