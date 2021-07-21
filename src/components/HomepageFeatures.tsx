import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Inspired by Material UI",
    Svg: require("../../static/img/material-ui.svg").default,
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum
        ante nec ligula bibendum, quis aliquet purus malesuada.
      </>
    )
  },
  {
    title: "TypeScript Ready",
    Svg: require("../../static/img/typescript.svg").default,
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum
        ante nec ligula bibendum, quis aliquet purus malesuada.
      </>
    )
  },
  {
    title: "Powered by React",
    Svg: require("../../static/img/reactjs-icon.svg").default,
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum
        ante nec ligula bibendum, quis aliquet purus malesuada.
      </>
    )
  }
];

const Feature = ({ Svg, title, description }) => {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const HomepageFeatures: React.FC = () => {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageFeatures;
