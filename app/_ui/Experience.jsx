"use client";
import styles from "../page.module.css";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool, MdWork } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
export default function Experience() {
  const observerProps = {
    triggerOnce: false,
  };
  return (
    <div className={styles.containerExperience}>
      <p className={styles.title}>Expérience</p>
      <VerticalTimeline className={styles.verticalTimeline}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(255, 255, 255)", color: "#000000" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(255, 255, 255)" }}
          date="2011 - present"
          iconStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
          icon={<MdSchool color="#000000" />}
          intersectionObserverProps={observerProps}
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
          icon={<MdSchool color="#000000" />}
          intersectionObserverProps={observerProps}
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
          icon={<MdWork color="#000000" />}
          intersectionObserverProps={observerProps}
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
          icon={<MdWork color="#000000" />}
          intersectionObserverProps={observerProps}
        >
          <h3 className="vertical-timeline-element-title">poste</h3>
          <h4 className="vertical-timeline-element-subtitle">zone</h4>
          <p>tâches</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<FaRegStar color="#ffffff" />}
          contentStyle={{ display: "none" }}
          intersectionObserverProps={observerProps}
        />
      </VerticalTimeline>
    </div>
  );
}
