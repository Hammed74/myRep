import '../stylesheets/Home.css'
import { Link } from 'react-router-dom';
import  SortIcon from '../assets/sort.png'
import { useState } from 'react';

function Home({name}){

     const [activeSection, setActiveSection] = useState("LEADS"); // Initial active section

     const handleClick = (sectionName) => {
       setActiveSection(sectionName);
     };

    return (
      <>
        <div className="body-home">
          <div className="sidebar">
            <div className="logo">myRep</div>
            <div className="home-username">{name}</div>
            <nav className="navbar">
              <div
                className={activeSection === "LEADS" ? "active" : ""}
                onClick={() => handleClick("LEADS")}
              >
                LEADS
              </div>
              <div
                className={activeSection === "INFO" ? "active" : ""}
                onClick={() => handleClick("INFO")}
              >
                INFO
              </div>
              <div
                className={activeSection === "PITCHES" ? "active" : ""}
                onClick={() => handleClick("PITCHES")}
              >
                PITCHES
              </div>
              <div
                className={activeSection === "CLOSED" ? "active" : ""}
                onClick={() => handleClick("CLOSED")}
              >
                CLOSED
              </div>
              <div
                className={activeSection === "SETTINGS" ? "active" : ""}
                onClick={() => handleClick("SETTINGS")}
              >
                SETTINGS
              </div>
            </nav>
            <Link to={"/"}>
              <div className="logout">LOG OUT</div>
            </Link>
          </div>
          <div className="home-main">
            <div className="date-container">
              <div>Thursday, June 28th </div>
            </div>
            <div className="main-bar-container">
              <div className="first-section-main-bar">
                <div className="my-leads">My Leads</div>
                <img className="sort-icon" src={SortIcon} alt="" />
              </div>
              <input className="search" type="search" placeholder="SEARCH" />
              <div className="create-container">
                <div className="create">CREATE +</div>
              </div>
            </div>
            <PastWeek />
            <PastMonth />
          </div>
        </div>
      </>
    );
}


function PastWeek(){
    return (
        <>
        <div className='past-week-container'>
            <div className='past-week'>Past Week</div>
            <div className='lead-card'>
                <div className="lead-name" style={{fontWeight: '700'}}>Hammed Sylla</div>
                <div className="lead-number">215-713-5942</div>
                <div className='lead-temp'>Hot</div>
                <div className='lead-primary-goal'>Mobile</div>
                <div className="reward-status">Silver</div>
            </div>
        </div>
        </>
    )
}

function PastMonth() {
  return (
    <>
      <div className="past-month-container">
        <div className="past-month">Past Month</div>
        <div className="lead-card">
          <div className="lead-name"></div>
          <div className="lead-number"></div>
          <div className="lead-temp"></div>
          <div className="lead-primary-goal"></div>
        </div>
      </div>
    </>
  );
}

export default Home