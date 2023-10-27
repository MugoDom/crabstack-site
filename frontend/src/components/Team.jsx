<<<<<<< HEAD:moonex/src/components/team/Team.jsx
import React from "react";

const teamContent = [
  {
    delayAnimation: "0",
    img: "team-1",
    title: "Dominic N Mugo",
    designation: "CEO Founder",
  },
  {
    delayAnimation: "100",
    img: "team-2",
    title: "Kevin Odhiambo",
    designation: "Lead - Strategy and Innovation",
  },
  {
    delayAnimation: "200",
    img: "team-3",
    title: "Yvonne Yano",
    designation: "Lead - Marketing and Advertising",
  },
  {
    delayAnimation: "300",
    img: "team-4",
    title: "Raymond Munene",
    designation: "Creative and Media Producer",
  },
];

const Team = () => {
  return (
    <>
      {teamContent.map((val, i) => (
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay={val.delayAnimation}
          key={i}
        >
          {/* <!--Team Member--> */}
          <div className="ptf-team-member ptf-team-member--has-effect">
            <div className="ptf-team-member__avatar">
              <div className="shadow-effect"></div>
              <a href="#">
                {" "}
                <img
                  src={`assets/img/root/team/${val.img}.png`}
                  alt={val.title}
                  loading="lazy"
                />
              </a>
            </div>
            <div className="ptf-team-member__content">
              <h6 className="ptf-team-member__name">
                <a href="#">{val.title}</a>
              </h6>
              <p className="ptf-team-member__function">{val.designation}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Team;
=======
import React from "react";
import {Link} from "react-router-dom";

const teamContent = [
  {
    delayAnimation: "0",
    img: "team-1",
    title: "Dominic N Mugo",
    designation: "CEO Founder",
  },
  {
    delayAnimation: "100",
    img: "team-2",
    title: "Kevin Odhiambo",
    designation: "Strategy and Innovation",
  },
  {
    delayAnimation: "200",
    img: "team-3",
    title: "Yvonne Yano",
    designation: "Business Development",
  },
  {
    delayAnimation: "300",
    img: "team-4",
    title: "Raymond Munene",
    designation: "Design and Media",
  },
];

const Team = () => {
  return (
    <>
      {teamContent.map((val, i) => (
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay={val.delayAnimation}
          key={i}
        >
          {/* <!--Team Member--> */}
          <div className="ptf-team-member ptf-team-member--has-effect" id="team">
            <div className="ptf-team-member__avatar">
              <div className="shadow-effect"></div>
              <a href="#">
                {" "}
                <img
                  src={`assets/img/root/team/${val.img}.png`}
                  alt={val.title}
                  loading="lazy"
                />
              </a>
            </div>
            <div className="ptf-team-member__content">
              <h6 className="ptf-team-member__name">
                <Link to="#team">{val.title}</Link>
              </h6>
              <p className="ptf-team-member__function">{val.designation}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Team;
>>>>>>> origin/main:frontend/src/components/Team.jsx
