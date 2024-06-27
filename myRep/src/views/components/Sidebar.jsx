import { useState } from "react";
import { Link } from "react-router-dom";
import LeadsIcon from "../../assets/leads.png";
import InfoIcon from "../../assets/info.png";
import Pitches from "../../assets/pitches.png";
import Settings from "../../assets/settings.png";
import Closed from "../../assets/closed.png";


export function Sidebar({name, dark}) {
  const [activeSection, setActiveSection] = useState("LEADS"); // Initial active section

  const handleClick = (sectionName) => {
    setActiveSection(sectionName);
  };

  return (
    <div
      className={`sidebar bg-card fixed top-4 ${dark ? "bg-zinc-800 text-white" : null}`}
    >
      <div className="logo">myRep</div>
      <div className="home-username">{name}</div>
      <nav className={`navbar`}>
        <div
          className={` ${dark ? "hover:bg-zinc-900" : "hover:bg-barHover"} ${activeSection === "LEADS" ? (dark ? "bg-zinc-900" : "bg-barHover") : ""}`}
          onClick={() => handleClick("LEADS")}
        >
          <img
            src={LeadsIcon}
            alt=""
            width="42px"
            className="inline-block mr-8"
          />
          LEADS
        </div>
        <div
          className={` ${dark ? "hover:bg-zinc-900" : "hover:bg-barHover"} ${activeSection === "INFO" ? (dark ? "bg-zinc-900" : "bg-barHover") : ""}`}
          onClick={() => handleClick("INFO")}
        >
          <img
            src={InfoIcon}
            alt=""
            width="42px"
            className="inline-block mr-8"
          />
          INFO
        </div>
        <div
          className={` ${dark ? "hover:bg-zinc-900" : "hover:bg-barHover"} ${activeSection === "PITCHES" ? (dark ? "bg-zinc-900" : "bg-barHover") : ""}`}
          onClick={() => handleClick("PITCHES")}
        >
          <img
            src={Pitches}
            alt=""
            width="42px"
            className="inline-block mr-8"
          />
          PITCHES
        </div>
        <div
          className={` ${dark ? "hover:bg-zinc-900" : "hover:bg-barHover"} ${activeSection === "CLOSED" ? (dark ? "bg-zinc-900" : "bg-barHover") : ""}`}
          onClick={() => handleClick("CLOSED")}
        >
          <img src={Closed} alt="" width="42px" className="inline-block mr-8" />
          CLOSED
        </div>
        <div
          className={` ${dark ? "hover:bg-zinc-900" : "hover:bg-barHover"} ${activeSection === "SETTINGS" ? (dark ? "bg-zinc-900" : "bg-barHover") : ""}`}
          onClick={() => handleClick("SETTINGS")}
        >
          <img
            src={Settings}
            alt=""
            width="42px"
            className="inline-block mr-8"
          />
          SETTINGS
        </div>
      </nav>
      <Link to={"/"}>
        <div className="logout">LOG OUT</div>
      </Link>
    </div>
  );
}
