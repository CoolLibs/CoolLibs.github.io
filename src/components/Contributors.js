import React from "react"
import Randomizedlist from "@site/src/components/RandomizedList"
import Contributor from "@site/src/components/Contributor"

export default ({}) => {
  return (
    <Randomizedlist
      elements={[
        <Contributor
          name="Jules Fouchy"
          github_name="julesfouchy"
          link="https://julesfouchy.github.io/"
          roles={["Programmer", "Project Lead"]}
        />,
        <Contributor
          name="Jolan Goulin"
          github_name="Jolan-Goulin"
          link="https://github.com/Jolan-Goulin"
          roles={["Programmer"]}
        />,
        <Contributor
          name="Emma Pernin"
          github_name="Emma-prn"
          link="https://github.com/Emma-prn"
          roles={["Programmer"]}
        />,
        <Contributor
          name="Théo Arnauld des Lions"
          github_name="Dyokiin"
          link="https://github.com/Dyokiin"
          roles={["Programmer"]}
        />,
        <Contributor
          name="Quentin Mesquita"
          github_name="MesQuentin"
          link="https://github.com/MesQuentin"
          roles={["Programmer"]}
        />,
        <Contributor
          name="Lucas David"
          github_name="MeucheRoume"
          link="http://lucasdavid.fr/"
          roles={["Programmer"]}
        />,
        <Contributor
          name="Anaïs Sarata Gougne"
          github_name="TaliaKah"
          link="https://taliakah.gitlab.io/portfolio/"
          roles={["Programmer"]}
        />,
        <Contributor
          name="Yvan Smorag"
          github_name="Luciditay"
          link="https://github.com/Luciditay"
          roles={["Technical Writer"]}
        />,
        <Contributor
          name="Enguerrand de Smet"
          github_name="dsmtE"
          link="https://github.com/dsmtE"
          roles={["Programmer", "R&D"]}
        />,
        <Contributor
          name="Jordan Roberty"
          github_name="badbois"
          link="https://github.com/badbois"
          roles={["Programmer"]}
        />,
      ]}
    />
  )
}
