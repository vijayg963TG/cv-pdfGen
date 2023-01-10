import React from "react";
import { Header } from "../components/Header";
import { Title } from "./Title";

export const Details = ({ name, post, summary, education, projects }) => {
  // console.log(name,post, summary, education, projects);
  return (
    <>
    <div className="left-part flex-65">
      <Header name={name} post={post} />
      <div className="flex">
        <div className="sideborder"></div>
        <div>
          <div className="details-sec">
            <div className="circle"></div> <Title title={"Summary"} />
            <p contentEditable="true" suppressContentEditableWarning={true} className="textDark">{summary}</p>
            <br/><br/><br/>
          </div>
         {education &&  <div className="details-sec">
            <div className="circle"></div> <Title title={"Education"} />
            <p contentEditable="true" suppressContentEditableWarning={true} className="textDark">- {education}</p>
            <br/><br/>
          </div>}
          <div className="details-sec">
            <div className="circle"></div>
            <Title title={"Projects"} />
            <p contentEditable="true" suppressContentEditableWarning={true} className="textDark">-{projects}</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
