import '../stylesheets/Home.css'
import { Link } from 'react-router-dom';
import  SortIcon from '../assets/sort.png'
import { useState } from 'react';
import Cards from "./components/Cards"
import "../../src/index.css"
import { Sidebar } from './components/Sidebar';
import { DrawerDialogDemo } from './components/DrawerDialog';
import { useEffect } from 'react';
import { Switch } from '../../components/ui/switch';
import { Label } from '@radix-ui/react-dropdown-menu';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { compareDesc, format } from 'date-fns';

export function Leads({
  name,
  newLead,
  setNewLead,
  leadArray,
  setLeadArray,
  sortValue,
  setSortValue,
  tempSort,
  setTempSort,
  search,
  setSearch,
  dark,
  setDark

}) {
  const find = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
  };

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
      "2157135942",
      83,
      "Mobile",
      currentDate1,
      currentDate1,
      100,
      "Notes"
    );
    const person2 = new Lead(
      "Cristiano Ronaldo",
      "Gold",
      "6103833930",
      50,
      "TV",
      currentDate2,
      currentDate2,
      74,
      "Notes"
    );
    const person3 = new Lead(
      "Micheal Jackson",
      "Platinum",
      "3016538902",
      98,
      "Internet & TV",
      currentDate3,
      currentDate3,
      39,
      "Notes"
    );
    const person4 = new Lead(
      "Lionel Messi",
      "Silver",
      "7178929208",
      68,
      "Home Security",
      currentDate4,
      currentDate4,
      55,
      "Notes"
    );

    const person5 = new Lead(
      "Lebron James",
      "Diamond",
      "3587390026",
      38,
      "Home Security",
      currentDate5,
      currentDate5,
      100,
      "Notes"
    );

    const person6 = new Lead(
      "James Bond",
      "Diamond",
      "9382847493",
      18,
      "Home Security",
      currentDate1,
      currentDate1,
      44,
      "Notes"
    );

    const person7 = new Lead(
      "Jeff Bezos",
      "Diamond",
      "5154720055",
      28,
      "Internet",
      currentDate3,
      currentDate3,
      87,
      "Notes"
    );

    const person8 = new Lead(
      "Kylian Mbappe",
      "Diamond",
      "2137452892",
      18,
      "TV",
      currentDate5,
      currentDate5,
      24,
      "Notes"
    );

    const leadArr = [
      person1,
      person2,
      person3,
      person4,
      person5,
      person6,
      person7,
      person8,
    ];

    const sortedLeadArr = [...leadArr].sort((a, b) =>
      compareDesc(a.date, b.date)
    );
    setLeadArray(sortedLeadArr);
  }, []);

  function sortBy(value) {
    setSortValue(value);
    if (value == "Temp") {
      const sortedArray = [...leadArray].sort((a, b) => b.temp - a.temp);
      setTempSort(true);
      setLeadArray(sortedArray);
    } else {
      const sortedArray = [...leadArray].sort((a, b) =>
        compareDesc(a.date, b.date)
      );
      setLeadArray(sortedArray);
      setTempSort(false);
    }
    console.log("pw " + pastWeekLeads);
    console.log("pm " + pastMonthLeads);
    console.log("py " + pastYearLeads);
  }

  const currentDate = new Date();

  const sevenDaysAgo = new Date(currentDate);
  sevenDaysAgo.setDate(currentDate.getDate() - 7);

  const pastWeekLeads = leadArray.filter((lead) => lead.date > sevenDaysAgo);

  const aMonthAgo = new Date(currentDate);
  aMonthAgo.setDate(currentDate.getDate() - 31);

  const pastMonthLeads = leadArray.filter(
    (lead) => lead.date >= aMonthAgo && lead.date <= sevenDaysAgo
  );

  const aYearAgo = new Date(currentDate);
  aYearAgo.setDate(currentDate.getDate() - 31);

  const pastYearLeads = leadArray.filter((lead) => lead.date <= aYearAgo);

  const dateNow = new Date();

  const dateFormatted = format(dateNow, "eeee, MMMM, do");
  const timeFormatted = format(dateNow, "h:mm a");

  function handleToggle(){
    if(!dark){
      setDark(true)
    }else{
      setDark(false)
    }
  }

  return (
    <>
      <div
        className={`home-main ml-20p ${dark ? "bg-zinc-900 text-white" : null}`}
      >
        <div className="date-container flex justify-between w-[90%] ml-32 ">
          <div className="flex items-center space-x-2">
            <Switch onCheckedChange={handleToggle} id="airplane-mode" />
            <Label htmlFor="airplane-mode">Activate {dark ? "Light" : "Dark"} Mode</Label>
          </div>
          <div>
            <div className="text-1.7xl text-right ml-4 ">{dateFormatted}</div>
            <div className="text-1.7xl text-right font-bold ml-4">
              {timeFormatted}
            </div>
          </div>
        </div>
        <div
          className={`main-bar-container sticky top-0 z-10 ${dark ? "bg-zinc-900 text-white" : null} `}
        >
          <div className="first-section-main-bar justify-center">
            <div className="my-leads">My Leads</div>
            <Select
              value={sortValue}
              onValueChange={(sortValue) => sortBy(sortValue)}
            >
              <SelectTrigger
                className={`w-32 text-sm border-none ${dark ? "bg-zinc-800 text-white focus:outline-none focus:none focus:none focus:none" : null}`}
              >
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent
                className={dark ? "bg-zinc-800 text-white border-none" : null}
              >
                <SelectGroup
                  className={dark ? "bg-zinc-800 text-white border-none" : null}
                >
                  <SelectLabel>Sort By</SelectLabel>
                  <SelectItem
                    value="Date"
                    className={
                      dark ? "focus:bg-violet-500 focus:text-white" : null
                    }
                  >
                    Date
                  </SelectItem>
                  <SelectItem
                    className={
                      dark ? "focus:bg-violet-500 focus:text-white" : null
                    }
                    value="Temp"
                  >
                    Temp
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <input
            className={`search ${dark ? "border-4 font-semibold" : null} `}
            type="search"
            placeholder="FIND"
            value={search}
            onChange={find}
          />
          <DrawerDialogDemo
            leadArray={leadArray}
            setLeadArray={setLeadArray}
            newLead={newLead}
            setNewLead={setNewLead}
            dark={dark}
          />
        </div>
        <Cards
          leadArray={!tempSort ? pastWeekLeads : leadArray}
          setLeadArray={setLeadArray}
          newLead={newLead}
          date={!tempSort ? "June 10th - Now" : null}
          time={!tempSort ? "Past Week" : "Leads"}
          search={search}
          dark={dark}
        />
        {!tempSort ? (
          <>
            <Cards
              leadArray={pastMonthLeads}
              setLeadArray={setLeadArray}
              newLead={newLead}
              date={"May 17th - Now"}
              time={"Past Month"}
              search={search}
              dark={dark}
            />
            <Cards
              leadArray={pastYearLeads}
              setLeadArray={setLeadArray}
              newLead={newLead}
              time={"Past Year"}
              search={search}
              dark={dark}
            />
          </>
        ) : null}
      </div>
    </>
  );
}

function calculateDaysElapsed(date){
      const currentDate = new Date();

      const timeElapsed = currentDate - date;

      let daysElapsed = (timeElapsed / 86400000) * 2;

      if(daysElapsed > 60){
        daysElapsed = 160
      }

      return daysElapsed;
}

function calculateTemp(date, rewards, interest){

   const daysElapsed = 160 - calculateDaysElapsed(date)

    let rewardsValue;

    switch (rewards) {
      case "Silver":
        rewardsValue = 7.5;
        break;
      case "Gold":
        rewardsValue = 15;
        break;
      case "Platinum":
        rewardsValue = 22.5;
        break;
      case "Diamond":
        rewardsValue = 30;
        break;
    }

    const interestValue = interest * 1.1;
    console.log(interestValue)
    console.log(daysElapsed)

    const score = ((daysElapsed + rewardsValue + interestValue) / 3)

    return score;
}

 export function Lead(name, rewards, phone, temp, category, date, followUp, interestLevel, notes) {

  calculateTemp(date)

   this.name = name;
   this.rewards = rewards;
   this.phone = phone;
   this.temp = calculateTemp(date, rewards, interestLevel);
   this.category = category;
   this.date = date;
   this.followUp = followUp;
   this.interestLevel = interestLevel;
   this.notes = notes;
 }




export default Leads




