import '../stylesheets/Home.css'
import { Link } from 'react-router-dom';
import  SortIcon from '../assets/sort.png'
import { useState } from 'react';
import Cards from "./components/Cards"
import "../../src/index.css"
import { Sidebar } from './components/Sidebar';
import { DrawerDialogDemo } from './components/DrawerDialog';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { compareDesc } from 'date-fns';

function Home({name}){

  const [newLead, setNewLead] = useState()

const [leadArray, setLeadArray] = useState([]);

const [sortValue, setSortValue] = useState();

const [tempSort, setTempSort] = useState(false)


function sortBy(value){
    setSortValue(value)
    if(value == "Temp"){
     const sortedArray = [...leadArray].sort((a, b) => b.temp - a.temp);
     setTempSort(true);
   setLeadArray(sortedArray)
    }else{
        const sortedArray = [...leadArray].sort((a, b) => compareDesc(a.date, b.date))
        setLeadArray(sortedArray)
        setTempSort(false);
    }
}

const currentDate = new Date();

const sevenDaysAgo = new Date(currentDate);
sevenDaysAgo.setDate(currentDate.getDate() - 7);

const pastWeekLeads = leadArray.filter((lead) => lead.date > sevenDaysAgo);

const aMonthAgo = new Date(currentDate);
aMonthAgo.setDate(currentDate.getDate() - 31);

const pastMonthLeads = leadArray.filter((lead) => (lead.date >= aMonthAgo &&  lead.date <= sevenDaysAgo));

const aYearAgo = new Date(currentDate);
aYearAgo.setDate(currentDate.getDate() - 365);

const pastYearLeads = leadArray.filter(
  (lead) => lead.date <= aYearAgo );


    return (
      <>
        <div className="body-home min-h-screen">
          <Sidebar name={name} />
          <div className="home-main ml-20p">
            <div className="date-container">
              <div>Thursday, June 28th </div>
            </div>
            <div className="main-bar-container sticky top-0 z-10 ">
              <div className="first-section-main-bar justify-center">
                <div className="my-leads">My Leads</div>
                <Select
                  value={sortValue}
                  onValueChange={(sortValue) => sortBy(sortValue)}
                >
                  <SelectTrigger className="w-32 text-sm">
                    <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Sort By</SelectLabel>
                      <SelectItem value="Date">Date</SelectItem>
                      <SelectItem value="Temp">Temp</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <input className="search" type="search" placeholder="FIND" />
              <DrawerDialogDemo
                leadArray={leadArray}
                setLeadArray={setLeadArray}
                newLead={newLead}
                setNewLead={setNewLead}
              />
            </div>
            <Cards
              leadArray={!tempSort ? pastWeekLeads : leadArray}
              setLeadArray={setLeadArray}
              newLead={newLead}
              date={!tempSort ? "June 10th - Now" : null}
              time={!tempSort ? "Past Week" : "Leads"}
            />
            {!tempSort ? (
              <>
                <Cards
                  leadArray={pastMonthLeads}
                  setLeadArray={setLeadArray}
                  newLead={newLead}
                  date={"May 17th - Now"}
                  time={"Past Month"}
                />
                <Cards
                  leadArray={pastYearLeads}
                  setLeadArray={setLeadArray}
                  newLead={newLead}
                  time={"Past Year"}
                />
              </>
            ) : null}
          </div>
        </div>
      </>
    );
}




export default Home




