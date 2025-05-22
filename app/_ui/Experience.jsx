"use client";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
export default function Experience() {
  return (
    <VerticalTimeline
    >
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(255, 255, 255)", color: "#000000" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(255, 255, 255)" }}
        date="2011 - present"
        iconStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
        icon={<span style={{ fontSize: "1.5rem" }}>💼</span>}
      >
        <h3 className="vertical-timeline-element-title">poste</h3>
        <h4 className="vertical-timeline-element-subtitle">zone</h4>
        <p>tâches</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(255, 255, 255)", color: "#000000" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(255, 255, 255)" }}
        date="2011 - present"
        iconStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
        icon={<span style={{ fontSize: "1.5rem" }}>💼</span>}
      >
        <h3 className="vertical-timeline-element-title">poste</h3>
        <h4 className="vertical-timeline-element-subtitle">zone</h4>
        <p>tâches</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(255, 255, 255)", color: "#000000" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(255, 255, 255)" }}
        date="2011 - present"
        iconStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
        icon={<span style={{ fontSize: "1.5rem" }}>💼</span>}
      >
        <h3 className="vertical-timeline-element-title">poste</h3>
        <h4 className="vertical-timeline-element-subtitle">zone</h4>
        <p>tâches</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(255, 255, 255)", color: "#000000" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(255, 255, 255)" }}
        date="2011 - present"
        iconStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
        icon={<span style={{ fontSize: "1.5rem" }}>💼</span>}
      >
        <h3 className="vertical-timeline-element-title">poste</h3>
        <h4 className="vertical-timeline-element-subtitle">zone</h4>
        <p>tâches</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}
