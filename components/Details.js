import React from "react";
import { Header } from "../components/Header";
import { Title } from "./Title";

export const Details = ({ name, summary, education, projects }) => {
  // console.log(name, summary, education, projects);
  return (
    <div className="left-part flex-65">
      <Header name={name} post={"WordPress Developer"} />
      <div className="flex">
        <div className="sideborder"></div>
        <div>
          <div className="details-sec">
            <div class="circle"></div> <Title title={"Summary"} />
            <p className="textDark">{summary}</p>
            <br/><br/><br/><br/><br/>
          </div>
          <div className="details-sec">
            <div class="circle"></div> <Title title={"Education"} />
            <p className="textDark">- {education}</p>
            <br/><br/>
          </div>
          <div className="details-sec">
            <div class="circle"></div>
            <Title title={"Projects"} />
            <p className="textDark">-{projects}</p>
            <br/><br/><br/><br/><br/><br/>
          </div>
        </div>
      </div>
    </div>
  );
};
