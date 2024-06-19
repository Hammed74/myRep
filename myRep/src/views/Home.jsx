import '../stylesheets/Home.css'
import { Link } from 'react-router-dom';
import  SortIcon from '../assets/sort.png'
import { useState } from 'react';
import Cards from "./components/Cards"
import "../../src/index.css"
import { Sidebar } from './components/Sidebar';
import { DrawerDialogDemo } from './components/DrawerDialog';

function Home({name}){

  const [newLead, setNewLead] = useState()


    return (
      <>
        <div className="body-home">
          <Sidebar name={name}/>
          <div className="home-main ml-20p">
            <div className="date-container">
              <div>Thursday, June 28th </div>
            </div>
            <div className="main-bar-container sticky top-0 z-10 ">
              <div className="first-section-main-bar">
                <div className="my-leads">My Leads</div>
                <img className="sort-icon" src={SortIcon} alt="" />
              </div>
              <input className="search" type="search" placeholder="FIND" />
                <DrawerDialogDemo newLead={newLead} setNewLead={setNewLead}/>
            </div>
            <Cards date={"June 10th - Now"} time={"Past Week"} />
            <Cards date={"May 17th - Now"} time={"Past Month"} />
            <Cards time={"Past Year"} />
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
                <div className="lead-number text-3xl font-bold underline">215-713-5942</div>
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




