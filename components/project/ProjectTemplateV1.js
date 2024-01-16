import React from "react";
import ProjectImage from "/components/project/ProjectImage";
import ProjectFooter from "/components/project/ProjectFooter";
import ProjectNav from "/components/project/ProjectNav";

export default function watsons({ title, desc, Images, items }) {
  return (
    <>
      <div className="layout project-v2 flex flex-col gap-4 md:gap-10">
        <section className="top-info">
          <h1 className="">{title}</h1>
          <p className="">{desc}</p>
        </section>

        <ProjectNav items={items} />

        <section className="content">
          {Images.map((img, index) => (
            <ProjectImage src={img} id={index} key={index} />
          ))}
        </section>
      </div>
      <ProjectFooter />
    </>
  );
}
