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

  // Styles communs
  const Styles = {
    content: {
      background: "rgb(0, 0, 0)",
      color: "#ffffff",
      boxShadow: "rgba(255, 255, 255, 0.22) 0px 1px 20px 6px",
      border: "1px solid rgb(255, 255, 255)",
    },
    arrow: {
      borderRight: "7px solid rgb(255, 255, 255)",
    },
    icon: {
      background: "rgb(0, 0, 0)",
    },
  };

  // icones
  const getIcon = (icon) => {
    const Icon =
      icon === "school" ? (
        <MdSchool color="#c54abd" aria-label="Éducation" />
      ) : (
        <MdWork color="#35cadc" aria-label="Expérience professionnelle" />
      );
    return Icon;
  };

  // Données des expériences
  const experiences = [
    {
      date: "2008 (1 mois)",
      icon: getIcon("school"),
      title: "Stage - Technicien en maintenance informatique",
      subtitle: "Djerba, Tunisie",
      description: "Maintenance hardware / software",
    },
    {
      date: "2008 (1 mois)",
      icon: getIcon("school"),
      title: "Stage - Technicien en maintenance informatique",
      subtitle: "Djerba, Tunisie",
      description: "Maintenance hardware / software",
    },
    {
      date: "2008 - 2010",
      icon: getIcon("work"),
      title: "Technicien en maintenance et réseau informatique",
      subtitle: "Djerba, Tunisie",
      description: "Maintenance hardware/software, assemblage PC, gestion de réseau, vente et support client",
    },
    {
      date: "2011 ( 6 mois )",
      icon: getIcon("work"),
      title: "Peintre en bâtiment",
      subtitle: "Djerba, Tunisie",
      description: "Préparation des surfaces et travaux de peinture",
    },
    {
      date: "2012",
      icon: getIcon("work"),
      title: "Photographe hôtelier",
      subtitle: "Djerba, Tunisie",
      description: "Séance de Shooting, Retouche photo",
    },

    {
      date: "2013",
      icon: getIcon("school"),
      title: "Stage - Agent de sécurité",
      subtitle: "Brest, France",
      description: "Accueil de public et accompagnement des clients",
    },
    {
      date: "2014 - 2015",
      icon: getIcon("work"),
      title: "Agent de prévention et sécurité (SST, Palpation de sécurité)",
      subtitle: "Brest, France",
      description: "Accueil de public et accompagnement des clients",
    },
    {
      date: "2015 - 2017",
      icon: getIcon("work"),
      title: "Agent de Service de Sécurité Incendie et d’Assistance à Personnes",
      subtitle: "Brest, France",
      description:
        "Assurer la sécurité des personnes et la sécurité incendie des biens, Sensibiliser les employés, Intervenir face à un début d’incendie, Alerter, évacuer le public et accueillir les secours en cas de problème",
    },
    {
      date: "2017 - 2024",
      icon: getIcon("work"),
      title: "Chef d’équipe de service de sécurité incendie",
      subtitle: "Brest, France",
      description:
        "Encadrer et former l’équipe de sécurité, Diriger le poste de sécurité lors des sinistres, Accompagnement de la commission de sécurité",
    },
  ];
  return (
    <div className={styles.containerExperience} id="experience" >
      <h2 className={styles.title} tabIndex={0} aria-label="section des expériences professionnelles">Expérience</h2>
      <VerticalTimeline className={styles.verticalTimeline}>
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={Styles.content}
            contentArrowStyle={Styles.arrow}
            date={exp.date}
            iconStyle={Styles.icon}
            icon={exp.icon}
            intersectionObserverProps={observerProps}
          >
            <h3 className="vertical-timeline-element-title">{exp.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{exp.subtitle}</h4>
            <p>{exp.description}</p>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: "linear-gradient(90deg, #1bd6e0 0%, #e62fb8 100%)" }}
          icon={<FaRegStar color="#ffffff" aria-label="Fin de l'expérience" />}
          contentStyle={{ display: "none" }}
          intersectionObserverProps={observerProps}
        />
      </VerticalTimeline>
    </div>
  );
}
