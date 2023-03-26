import React, { useRef } from "react";
import useCheckVisible from "../hooks/useCheckVisible";

const Experience = () => {
  const parentRef = useRef(null);
  const { isVisible } = useCheckVisible(parentRef);

  const currentDate = new Date().toLocaleDateString("ro-RO", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const experiencesData = [
    {
      id: "experience-0",
      job: "Assistant programmer",
      company: "RaisisSoftware",
      position: "Junior I",
      startDate: "02.08.2022",
      positions: [
        {
          id: "position-0-0",
          job: "Assistant programmer",
          startDate: "02.08.2022",
          endDate: "31.12.2022",
          position: "Junior I",
        },
        {
          id: "position-0-1",
          job: "Assistant programmer",
          startDate: "01.01.2023",
          endDate: `${currentDate}`,
          position: "Junior II",
        },
      ],
    },
  ];

  function calculateMonths(startDate, endDate) {
    const sDate = new Date(startDate.split(".").reverse().join("-"));
    const eDate = new Date(endDate.split(".").reverse().join("-"));

    const monthsDiff =
      (eDate.getFullYear() - sDate.getFullYear()) * 12 +
      (eDate.getMonth() - sDate.getMonth());

    return monthsDiff;
  }

  return (
    <section className="section-experience" ref={parentRef}>
      <div className="experience">
        <div className="experience__header">
          <h2
            className={`heading-secondary ${
              isVisible && "leftToRight u-animation-delay"
            }`}
          >
            Experience
          </h2>
        </div>
        <div
          className={`experience__container ${
            isVisible && "bottomToTop u-animation-delay"
          }`}
        >
          {experiencesData.map((experienceData) => {
            return (
              <div className="timeline" key={experienceData.id}>
                <div className="timeline__job" id={experienceData.id}>
                  <div className="timeline__job--content">
                    <p className="paragraph u-paragraph-green">Company:</p>
                    <p className="paragraph">{experienceData.company}</p>
                  </div>
                  <div className="timeline__job--content">
                    <p className="paragraph u-paragraph-green">Job:</p>
                    <p className="paragraph">{experienceData.job}</p>
                  </div>
                  <div className="timeline__job--content">
                    <p className="paragraph u-paragraph-green">Position:</p>
                    <p className="paragraph">{experienceData.position}</p>
                  </div>
                  <div className="timeline__job--content">
                    <p className="paragraph u-paragraph-green">Start date:</p>
                    <p className="paragraph">{experienceData.startDate}</p>
                  </div>
                  <div className="timeline__job--content">
                    <p className="paragraph u-paragraph-green">
                      Months in the company:
                    </p>
                    <p className="paragraph">
                      {calculateMonths(
                        experienceData.startDate,
                        experienceData.positions[
                          experienceData.positions.length - 1
                        ].endDate
                      )}
                    </p>
                  </div>
                </div>
                {experienceData.positions.map((position) => {
                  return (
                    <div
                      className="timeline__job "
                      key={position.id}
                      id={position.id}
                    >
                      <div className="timeline__job--content">
                        <p className="paragraph u-paragraph-blue">Job:</p>
                        <p className="paragraph">{experienceData.job}</p>
                      </div>
                      <div className="timeline__job--content">
                        <p className="paragraph u-paragraph-blue">Position:</p>
                        <p className="paragraph">{position.position}</p>
                      </div>
                      <div className="timeline__job--content">
                        <p className="paragraph u-paragraph-blue">
                          Start date:
                        </p>
                        <p className="paragraph">{position.startDate}</p>
                      </div>
                      <div className="timeline__job--content">
                        <p className="paragraph u-paragraph-blue">End date:</p>
                        <p className="paragraph">{position.endDate}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
