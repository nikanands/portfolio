import Image from "next/image";

const Page = () => {
  return (
    <div className="data-content-container">
      <h1>Cardiovascular Disease Risk</h1>
      <h2>Data Analysis & Machine Learning Model</h2>
      <section className="cards">
        <div>
          <h3 className="card-title">GOAL</h3>
          <p className="card-subtitle">
            How can we classify the cardiovascular disease risk in the patients?
            Which are the lifestyle factors of a person that can be contributed
            to being at risk with any form of cardiovascular disease?
          </p>
        </div>
        <div>
          <h3 className="card-title">RESULT</h3>
          <p className="card-subtitle">
            By using statistics, programming and machine learning techniques, I
            can find patterns hidden in the data. With this information I can
            make an algorithm or statistical model which you can use to make the
            right decisions.
          </p>
        </div>
      </section>
      <div className="details">
        <h3>CASE - WHICH PATIENTS ARE AT RISK OF CARDIOVASCULAR DISEASE</h3>
        <p>
          The ability to predict when a patient is at risk of cardiovascular
          disease is very important and valuable in the medical field. Disease
          Risk Prediction can be defined as the lifecycle factors of the patient
          shows the condition of the patient. In order to apply a modeling
          algorithm to predict the disease risk, we need to understand the
          patient daily lifecycle factors that signal the risk of disease. The
          Behavioral Risk Factor Surveillance System (BRFSS) collected dataset
          is good example for this.
        </p>
      </div>

      <div className="details">
        <h3>
          WHICH BEHAVIOURAL LIFECYCLE FACTORS ARE SPECIFIED FOR DISEASE RISK?
        </h3>
        <p>
          First step for any kind of analytics, you must select the factors that
          are able to predict the result. These factors can be anything based on
          the datasets. For example
        </p>
        <span>Patient Personal Factors</span>
        <ul>
          <li>Age of the patient</li>
          <li>Gender of the patient</li>
          <li>BMI of the patient</li>
        </ul>
        <span>Patient Behavioural Factors</span>
        <ul>
          <li>Exercise</li>
          <li>Food Consumtion</li>
          <li>Alcohol Consumtion</li>
          <li>Smoking</li>
        </ul>
        <p>
          Usually you have many factors, but you have to select those factors
          which has more prediction power
        </p>
      </div>

      <div className="details">
        <h3>HOW CAN WE PREDICT IF THE PATIENT IS AT RISK OR NOT?</h3>
        <p>
          A statistical model is good to find out the relation between different
          factors we have selected or we intend to select. These factors and
          their relation do give us insights but they don't predict. To do the
          prediction we have to use predictive model. After selecting the best
          model we applied it on the patient to obtain the prediction about the
          risk.
        </p>
        <div className="details-image">
          <Image
            src={"/prediction vs actual.png"}
            alt="Prediction vs Actual"
            // width={"800"}
            // height={"400"}
            fill
            sizes="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
