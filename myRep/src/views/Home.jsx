import { Sidebar } from "./components/Sidebar"
import { Leads } from "./Leads"
import { useState } from "react";

export function Home({name}){

      const [newLead, setNewLead] = useState();

      const [leadArray, setLeadArray] = useState([]);

      const [sortValue, setSortValue] = useState();

      const [tempSort, setTempSort] = useState(false);

      const [search, setSearch] = useState("");

    const [dark, setDark] = useState(false);
    return (
      <>
        <div className={`body-home min-h-screen ${dark ? "bg-zinc-900 text-white" : null}`}>
          <Sidebar name={name} dark={dark}/>
          <Leads
            newLead={newLead}
            setNewLead={setNewLead}
            leadArray={leadArray}
            setLeadArray={setLeadArray}
            sortValue={sortValue}
            setSortValue={setSortValue}
            tempSort={tempSort}
            setTempSort={setTempSort}
            search={search}
            setSearch={setSearch}
            dark={dark}
            setDark={setDark}
          />
        </div>
      </>
    );
}