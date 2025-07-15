import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          {/* Education */}
          <VerticalTimelineElement
            date="2017 - 2019"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">A Levels</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Sir M. A. Refalo 6th Form
            </h4>
            <p>Computer Studies & Pure Maths</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="2019 - 2022"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              BSc (Hons) Software Development
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              University of Malta
            </h4>
            <p>Information Technology</p>
          </VerticalTimelineElement>

          {/* Work Experience */}
          <VerticalTimelineElement
            date="2020"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Lifeguard</h3>
            <h4 className="vertical-timeline-element-subtitle">ERRC, Malta</h4>
            <p>Rescue and safety operations</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="2021 - 2022"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Student Group Leader
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              International House, Malta
            </h4>
            <p>Team leading, coordination</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="2023"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Backend Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">The Pixel</h4>
            <p>API development, backend architecture</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="2023 - Present"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Co-founder & Software Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">3BIT</h4>
            <p>
              Running a software company building apps, platforms, and digital
              products
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
