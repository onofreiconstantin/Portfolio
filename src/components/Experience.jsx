import React, { useRef } from "react";
import Xarrow from "react-xarrows";
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
      id: "0",
      company: "Mics Software Srl",
      position: "Wordpress Developer (practice period)",
      startDate: "01.06.2019",
      endDate: `31.06.2019`,
    },
    {
      id: "1",
      company: "RaisisSoftware",
      position: "React Frontend Developer",
      startDate: "02.08.2022",
      present: true,
      endDate: `${currentDate}`,
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

  function renderArrow(endId, index, children) {
    if (index === 0) return;

    const startId = children[index - 1].id;
    let startDirection;
    let endDirection;

    if (index % 2 !== 0) {
      startDirection = "right";
      endDirection = "right";
    } else {
      startDirection = "left";
      endDirection = "left";
    }

    return (
      <Xarrow
        start={startId}
        end={endId}
        startAnchor={startDirection}
        endAnchor={endDirection}
        color="#7dd3fc"
        animateDrawing={true}
        path="grid"
        gridBreak="150%"
        headShape="circle"
        headSize={4}
        zIndex={1}
      />
    );
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
          <div className="timeline">
            {experiencesData.map((position, index, self) => {
              return (
                <React.Fragment key={position.id}>
                  <aside>{renderArrow(position.id, index, self)}</aside>
                  <div
                    className={`timeline__job ${
                      index % 2 === 0 ? "u-margin-right" : "u-margin-left"
                    }`}
                    id={position.id}
                  >
                    <div className="timeline__job--content">
                      <p className="paragraph ">Company:</p>
                      <p className="paragraph">{position.company}</p>
                    </div>
                    <div className="timeline__job--content">
                      <p className="paragraph ">Position:</p>
                      <p className="paragraph">{position.position}</p>
                    </div>
                    <div className="timeline__job--content">
                      <p className="paragraph ">Start date:</p>
                      <p className="paragraph">{position.startDate}</p>
                    </div>
                    <div className="timeline__job--content">
                      <p className="paragraph ">End date:</p>
                      <p className="paragraph">
                        {`${position.endDate}
                          ${
                            position.hasOwnProperty("present") &&
                            position.present
                              ? " (present)"
                              : ""
                          }`}
                      </p>
                    </div>
                    <div className="timeline__job--content">
                      <p className="paragraph ">Months in the company:</p>
                      <p className="paragraph">
                        {calculateMonths(position.startDate, position.endDate)}
                      </p>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
