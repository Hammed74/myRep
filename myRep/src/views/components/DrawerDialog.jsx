import * as React from "react";
import { useState } from "react";

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
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../../../components/ui/input-otp";

import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Lead } from "../Home";
import { RadioGroup, RadioGroupItem } from "../../../components/ui/radio-group";


import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../components/ui/popover";

import { Calendar } from "../../../components/ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";



export function DrawerDialogDemo({ newLead, setNewLead, leadArray, setLeadArray }) {
  const [open, setOpen] = React.useState(false);

  const [leadName, setLeadName] = React.useState();

  const [leadCategory, setLeadCategory] = React.useState();

  const [leadRewards, setLeadRewards] = React.useState();

    const [leadNumber, setLeadNumber] = React.useState();

    const [followUp, setFollowUp] = React.useState();
 
  function handleSetNewLead(leadName, leadCategory, leadRewards, leadNumber, followUp) {
    const currentDate = new Date()
    const lead = new Lead(leadName, leadRewards, leadNumber, 70, leadCategory, currentDate, followUp, "");
    setNewLead(lead);
    setLeadArray([lead, ...leadArray])
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="newLead">New Lead +</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add A New Lead</DialogTitle>
          <DialogDescription>Enter Details Here</DialogDescription>
        </DialogHeader>
        <ProfileForm
          leadName={leadName}
          leadCategory={leadCategory}
          setLeadName={setLeadName}
          setLeadCategory={setLeadCategory}
          handleSetNewLead={handleSetNewLead}
          leadRewards={leadRewards}
          setLeadRewards={setLeadRewards}
          leadNumber={leadNumber}
          setLeadNumber={setLeadNumber}
          followUp={followUp}
          setFollowUp={setFollowUp}
        />
      </DialogContent>
    </Dialog>
  );
}

function ProfileForm({
  className,
  leadName,
  leadCategory,
  setLeadName,
  setLeadCategory,
  handleSetNewLead,
  leadRewards,
  setLeadRewards,
  leadNumber,
  setLeadNumber,
  followUp,
  setFollowUp,
}) {
  function handleLeadName(event) {
    setLeadName(event.target.value);
  }

    const handleLeadRewards = (value) => {
      setLeadRewards(value);
    };

 
  return (
    <div className={cn("grid items-start gap-8", className)}>
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input
          onChange={handleLeadName}
          type="text"
          id="name"
          placeholder="Enter Name Here"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="category">Phone Number</Label>
        <InputOTP
          value={leadNumber}
          onChange={(leadNumber) => setLeadNumber(leadNumber)}
          maxLength={10}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={6} />
            <InputOTPSlot index={7} />
            <InputOTPSlot index={8} />
            <InputOTPSlot index={9} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="category">Rewards</Label>
        <Select onValueChange={handleLeadRewards} value={leadRewards}>
          <SelectTrigger className="">
            <SelectValue placeholder="Select Reward Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Diamond">Diamond</SelectItem>
              <SelectItem value="Platinum">Platinum</SelectItem>
              <SelectItem value="Gold">Gold</SelectItem>
              <SelectItem value="Silver">Silver</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <RadioGroup
        value={leadCategory}
        onValueChange={(leadCategory) => setLeadCategory(leadCategory)}
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Internet" id="r1" />
          <Label htmlFor="r1">Internet</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="TV" id="r2" />
          <Label htmlFor="r2">TV</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Mobile" id="r3" />
          <Label htmlFor="r3">Mobile</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Home Security" id="r3" />
          <Label htmlFor="r3">Home Security</Label>
        </div>
      </RadioGroup>
      <div className="grid gap-2">
        <Label htmlFor="Date of Follow Up">Date Of Follow Up</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[280px] justify-start text-left font-normal",
                !followUp && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {followUp ? format(followUp, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={followUp}
              onSelect={setFollowUp}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
   

      <Button
        className="bg-violet-600"
        onClick={() =>
          handleSetNewLead(
            leadName,
            leadCategory,
            leadRewards,
            leadNumber,
            followUp
          )
        }
      >
        Save changes
      </Button>
    </div>
  );
}