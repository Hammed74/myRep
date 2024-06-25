import '../stylesheets/Home.css'
import { Link } from 'react-router-dom';
import  SortIcon from '../assets/sort.png'
import { useState } from 'react';
import Cards from "./components/Cards"
import "../../src/index.css"
import { Sidebar } from './components/Sidebar';
import { DrawerDialogDemo } from './components/DrawerDialog';
import { useEffect } from 'react';

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

 useEffect(() => {
   const currentDate1 = new Date();
   currentDate1.setDate(currentDate1.getDate() - 1);

   const currentDate2 = new Date();
   currentDate2.setDate(currentDate2.getDate() - 12);

   const currentDate3 = new Date();
   currentDate3.setDate(currentDate3.getDate() - 7);

   const currentDate4 = new Date();
   currentDate4.setDate(currentDate4.getDate() - 3);

   const currentDate5 = new Date();
   currentDate5.setDate(currentDate5.getDate() - 462);

   const person1 = new Lead(
     "Hammed Sylla",
     "Diamond",
     "215-713-5942",
     83,
     "Mobile",
     currentDate1,
     "Notes"
   );
   const person2 = new Lead(
     "Martha Stewart",
     "Gold",
     "610-383-3930",
     63,
     "TV",
     currentDate2,
     "Notes"
   );
   const person3 = new Lead(
     "John Bryant",
     "Platinum",
     "301-653-8902",
     13,
     "Internet & TV",
     currentDate3,
     "Notes"
   );
   const person4 = new Lead(
     "Tyrone Smalls",
     "Silver",
     "717-892-9208",
     33,
     "Home Security",
     currentDate4,
     "Notes"
   );

   const person5 = new Lead(
     "Willie Nelson",
     "Diamond",
     "358-739-0026",
     8,
     "Home Security",
     currentDate5,
     "Notes"
   );

   const leadArr = [person1, person2, person3, person4, person5];

   const sortedLeadArr = [...leadArr].sort((a, b) =>
     compareDesc(a.date, b.date)
   );
   setLeadArray(sortedLeadArr);
 }, []);


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
    console.log("pw " + pastWeekLeads)
    console.log("pm " + pastMonthLeads);
    console.log("py " + pastYearLeads);
}

const currentDate = new Date();

const sevenDaysAgo = new Date(currentDate);
sevenDaysAgo.setDate(currentDate.getDate() - 7);

const pastWeekLeads = leadArray.filter((lead) => lead.date > sevenDaysAgo);

const aMonthAgo = new Date(currentDate);
aMonthAgo.setDate(currentDate.getDate() - 31);

const pastMonthLeads = leadArray.filter((lead) => (lead.date >= aMonthAgo && lead.date <= sevenDaysAgo));

const aYearAgo = new Date(currentDate);
aYearAgo.setDate(currentDate.getDate() - 31);

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

 export function Lead(name, rewards, phone, temp, category, date, followUp, interestLevel, notes) {
   this.name = name;
   this.rewards = rewards;
   this.phone = phone;
   this.temp = temp;
   this.category = category;
   this.date = date;
   this.followUp = followUp;
   this.interestLevel = interestLevel;
   this.notes = notes;
 }




export default Home




