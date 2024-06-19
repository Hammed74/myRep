import * as React from "react";

import { cn } from "../../../lib/utils";
// import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "../../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../../components/ui/drawer";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Lead } from "./Cards";

export function DrawerDialogDemo({newLead, setNewLead}) {
  const [open, setOpen] = React.useState(false);

    const [leadName, setLeadName] = React.useState("");

        const [leadCategory, setLeadCategory] = React.useState("");

  function handleSetNewLead(leadName, leadCategory){
    const lead = new Lead(leadName, "", "", "", leadCategory, "", "" );
    setNewLead(lead)
  }

    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="newLead">New Lead +</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add A New Lead</DialogTitle>
            <DialogDescription>
              Enter Details Here
            </DialogDescription>
          </DialogHeader>
          <ProfileForm leadName={leadName} leadCategory={leadCategory} setLeadName={setLeadName} setLeadCategory={setLeadCategory} handleSetNewLead={handleSetNewLead} />
        </DialogContent>
      </Dialog>
    );

}

function ProfileForm({className, leadName, leadCategory, setLeadName, setLeadCategory, handleSetNewLead}) {



      function handleLeadName(event) {
        setLeadName(event.target.value);
      }



        function handleLeadCategory(event) {
          setLeadCategory(event.target.value);
        }

  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input onChange={handleLeadName} type="text" id="name" defaultValue="John Doe" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="category">Category</Label>
        <Input onChange={handleLeadCategory} id="category" defaultValue="Mobile" />
      </div>
      <Button onClick={handleSetNewLead(leadName, leadCategory)} type="submit">Save changes</Button>
    </form>
  );
}
