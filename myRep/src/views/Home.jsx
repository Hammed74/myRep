import '../stylesheets/Home.css'
import { Link } from 'react-router-dom';
import  SortIcon from '../assets/sort.png'
import { useState } from 'react';
import Cards from "./components/Cards"
import LeadsIcon from '../assets/leads.png'
import InfoIcon from '../assets/info.png'
import Pitches from '../assets/pitches.png'
import Settings from '../assets/settings.png'
import Closed from '../assets/closed.png'
import "../../src/index.css"

function Home({name}){

     const [activeSection, setActiveSection] = useState("LEADS"); // Initial active section

     const handleClick = (sectionName) => {
       setActiveSection(sectionName);
     };

    return (
      <>
        <div className="body-home">
          <div className="sidebar bg-card fixed top-4">
            <div className="logo">myRep</div>
            <div className="home-username">{name}</div>
            <nav className="navbar">
              <div
                className={activeSection === "LEADS" ? "active" : ""}
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
                className={activeSection === "INFO" ? "active" : ""}
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
                className={activeSection === "PITCHES" ? "active" : ""}
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
                className={activeSection === "CLOSED" ? "active" : ""}
                onClick={() => handleClick("CLOSED")}
              >
                <img
                  src={Closed}
                  alt=""
                  width="42px"
                  className="inline-block mr-8"
                />
                CLOSED
              </div>
              <div
                className={activeSection === "SETTINGS" ? "active" : ""}
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
              <DrawerDialogDemo />
            </nav>
            <Link to={"/"}>
              <div className="logout">LOG OUT</div>
            </Link>
          </div>
          <div className="home-main ml-20p">
            <div className="date-container">
              <div>Thursday, June 28th </div>
            </div>
            <div className="main-bar-container sticky top-0 z-10 ">
              <div className="first-section-main-bar">
                <div className="my-leads">My Leads</div>
                <img className="sort-icon" src={SortIcon} alt="" />
              </div>

              <input className="search" type="search" placeholder="FILTER" />
              <div className="create-container mr-5 hover:bg-violet-900 transition-all duration-100">
                <div className="create ">CREATE LEAD+</div>
              </div>
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


import * as React from "react"
 
import { cn } from "../../lib/utils"
// import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "../../components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../components/ui/drawer"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
 
export function DrawerDialogDemo() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = true;
 
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    )
  }
 
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you're done.
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
 
function ProfileForm(className){
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" defaultValue="shadcn@example.com" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username">Username</Label>
        <Input id="username" defaultValue="@shadcn" />
      </div>
      <Button type="submit">Save changes</Button>
    </form>
  )
}


