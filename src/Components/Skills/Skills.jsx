import React from "react";
import "./Skills.css";
import Slide from "react-reveal/Slide";

const Skills = () => {
  const frontendSkills = [
    {
      title: "HTML",
      percentage: "95%",
      image:
        "https://icones.pro/wp-content/uploads/2021/05/icone-html-bleue.png",
    },
    {
      title: "CSS & Bootstrap",
      percentage: "80%",
      image: "https://blog.leonhassan.co.uk/content/images/2019/09/css3.svg",
    },
    {
      title: "Javascript",
      percentage: "75%",
      image:
        "https://www.freepnglogos.com/uploads/javascript/javascript-web-development-for-app-mobile-4.png",
    },
    {
      title: "React Js",
      percentage: "85%",
      image: "https://ivazz.com/wp-content/uploads/2021/05/react.png",
    },
  ];

  const backendSkills = [
    {
      title: "Node Js",
      percentage: "70%",
      image:
        "https://hackr.io/tutorials/learn-node-js/logo/logo-node-js?ver=1641912447",
    },
    {
      title: "Express Js",
      percentage: "65%",
      image:
        "https://www.shareicon.net/download/2016/07/10/119473_development_512x512.png",
    },
    {
      title: "MongoDB",
      percentage: "70%",
      image:
        "https://25y35xxcueanov2s108puszp-wpengine.netdna-ssl.com/wp-content/uploads/2022/03/ext-553.png",
    },
    {
      title: "MySQL",
      percentage: "55%",
      image: "https://icon-library.com/images/a2757b299d.svg.svg",
    },
  ];

  return (
    <div className="skills" id="Skills">
      <Slide left>
        <h1 className="s-heading">
          <span>My Technical </span>
          <br />
          <span style={{ color: "#00AEEF" }}>Skills</span>
        </h1>
      </Slide>

      <div className="s-page">
        <Slide left>
          <div>
            {frontendSkills.map((item, index) => (
              <div className="s-container1" key={index}>
                <img src={item.image} alt="skill"></img>

                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p style={{ margin: "0px", marginBottom: "8px" }}>
                      {item.title}
                    </p>
                    <p
                      style={{
                        margin: "0px",
                        marginBottom: "8px",
                        color: "#00AEEF",
                      }}
                    >
                      {item.percentage}
                    </p>
                  </div>

                  <div className="s-bar">
                    <span
                      className="s-bar-percent"
                      style={{ width: `${item.percentage}` }}
                    ></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Slide>

        <Slide right>
          <div>
            {backendSkills.map((item, index) => (
              <div className="s-container1" key={index}>
                <img src={item.image} alt="skill"></img>

                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p style={{ margin: "0px", marginBottom: "8px" }}>
                      {item.title}
                    </p>
                    <p
                      style={{
                        margin: "0px",
                        marginBottom: "8px",
                        color: "#00AEEF",
                      }}
                    >
                      {item.percentage}
                    </p>
                  </div>

                  <div className="s-bar">
                    <span
                      className="s-bar-percent"
                      style={{ width: `${item.percentage}` }}
                    ></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Skills;
