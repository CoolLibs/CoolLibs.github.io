import clsx from 'clsx';
import React from 'react';

import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '🎉 Easy to use',
    Svg: require('../../static/img/drawkit-daily-life-vector-illustration-07.svg').default,
    description: (
      <>
        Well documented, well designed and full of tutorials.
      </>
    ),
  },
  {
    title: '💖 Open-Source',
    Svg: require('../../static/img/drawkit-daily-life-vector-illustration-07.svg').default,
    description: (
      <>
        Built on top of other amazing open-source projects such as <b><i>glfw</i></b>, <b><i>Dear ImGui</i></b>, <b><i>glm</i></b>, <b><i>spdlog</i></b>, <b><i>cereal</i></b>, <b><i>stb</i></b>, <b><i>boxer</i></b>, <b><i>nfd</i></b> and many more.
      </>
    ),
  },
  {
    title: '💻 Modern',
    Svg: require('../../static/img/drawkit-daily-life-vector-illustration-07.svg').default,
    description: (
      <>
        Written in clean C++ 20. <br/>
        Making use of the latest and greatest features.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
}
