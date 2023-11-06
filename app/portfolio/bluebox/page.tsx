import Image from "next/image";

const Page = () => {
  return (
    <div className="design-content-container">
      <h1>BlueBox</h1>
      <h2>Website Design</h2>
      <p>
        A website designed for B2C platform. This is just the landing page out
        of the full website.{" "}
        <span>
          The target for this business are podcast startups or influencers who
          are looking to present their podcast whether it is audio or video. The
          simple black and white design gives it very clean yet powerful look.
        </span>
      </p>
      <figure>
        <Image
          src={"/bluebox-full.png"}
          alt="Bluebox"
          fill
          // sizes="(max-width: 1200px) 80rem, (max-width: 1000px) 100%, (max-width: 810px) 70vw"
          sizes="100%"
        />
      </figure>
    </div>
  );
};

export default Page;
