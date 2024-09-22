import React from "react";
import "./home.css";
import FeatureItem from "../../components/feature-item/FeatureItem";
import chatIcon from '../../img/icon-chat.webp'
import moneyIcon from '../../img/icon-money.webp'
import securityIcon from '../../img/icon-security.webp'

const Home = () => {
  return (
    <div>
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <div className="features">
        <FeatureItem iconSrc={chatIcon} altText="Chat Icon" title="You are our #1 priority">
            Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.
          </FeatureItem>

          <FeatureItem iconSrc={moneyIcon} altText="Money Icon" title="More savings means higher rates">
            The more you save with us, the higher your interest rate will be!
          </FeatureItem>

          <FeatureItem iconSrc={securityIcon} altText="Security Icon" title="Security you can trust">
            We use top of the line encryption to make sure your data and money is always safe.
          </FeatureItem>
        </div>
      </section>
    </div>
  );
};

export default Home;
