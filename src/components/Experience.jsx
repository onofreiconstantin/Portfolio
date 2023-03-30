import React, { useRef } from "react";
import Xarrow from "react-xarrows";
import useCheckVisible from "../hooks/useCheckVisible";

const Experience = () => {
  const parentRef = useRef(null);
  const { animateElement } = useCheckVisible(parentRef);

  const experiencesData = [
    {
      id: "0",
      company: "Mics Software Srl",
      position: "Practice in Wordpress (practice period)",
      startDate: "01.06.2019",
      endDate: `31.06.2019`,
    },
    {
      id: "1",
      company: "RaisisSoftware",
      position: "Front End Developer",
      startDate: "02.08.2022",
    },
  ];

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
              animateElement && "leftToRight u-animation-delay"
            }`}
          >
            Experience
          </h2>
        </div>
        <div
          className={`experience__container ${
            animateElement && "bottomToTop u-animation-delay"
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
                    {position.hasOwnProperty("endDate") && (
                      <div className="timeline__job--content">
                        <p className="paragraph ">End date:</p>
                        <p className="paragraph">{position.endDate}</p>
                      </div>
                    )}
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
