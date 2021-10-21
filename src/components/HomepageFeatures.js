import clsx from 'clsx';
import React from 'react';

import styles from './HomepageFeatures.module.css';

const FeatureList = [
//   {
//     title: 'Image',
//     Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
//     description: (
//       <>
//         Designed for image-oriented software.
//       </>
//     ),
//   },
//   {
//     title: 'Focus on What Matters',
//     Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
//     description: (
//       <>
//         Built on top of other amazing open-source projects like __*glfw*__, __*Dear ImGui*__, __*glm*__, __*spdlog*__, __*cereal*__, __*stb*__,  __*boxer*__, __*nfd*__ and many more.
//       </>
//     ),
//   },
//   {
//     title: 'Powered by React',
//     Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
//     description: (
//       <>
// Written in modern C++ 20
//       </>
//     ),
//   },
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
