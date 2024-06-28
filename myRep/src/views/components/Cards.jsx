import { MoreHorizontal } from "lucide-react";
import { useEffect, useState } from "react";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Progress } from "../../../components/ui/progress";
import {v4 as uuidv4} from 'uuid'
import { useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";

import { compareDesc } from "date-fns";


import Person from "../../assets/person.png";

export default function Cards({date, time, newLead, leadArray, setLeadArray, search, dark, mainArray}) {




  return (
    <Card
      className={dark ? "bg-zinc-800 text-white border-none font-semibold" : ""}
    >
      <CardHeader>
        <CardTitle>{time}</CardTitle>
        <CardDescription className={dark ? "text-purple-500" : null}>{date}</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className={dark ? "text-violet-200" : ""}>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">Image</span>
              </TableHead>
              <TableHead
                className={dark ? "bg-zinc-800 t text-violet-500" : ""}
              >
                Name
              </TableHead>
              <TableHead
                className={dark ? "bg-zinc-800 text-violet-500" : ""}
              >
                Rewards
              </TableHead>
              <TableHead
                className={dark ? "bg-zinc-800 text-violet-500" : ""}
              >
                Phone Number
              </TableHead>
              <TableHead
                className={dark ? "bg-zinc-800  text-violet-500" : ""}
              >
                Temp
              </TableHead>
              <TableHead
                className={dark ? "bg-zinc-800  text-violet-500" : ""}
              >
                Category
              </TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leadArray &&
              leadArray.map((lead) => {
                if (
                  lead.name.toLowerCase().includes(search.toLowerCase()) ||
                  lead.rewards.toLowerCase().includes(search.toLowerCase()) ||
                  lead.category.toLowerCase().includes(search.toLowerCase()) ||
                  lead.phone.includes(search.toLowerCase())
                )
                  return (
                    <LeadCard
                      key={lead.id}
                      id={lead.id}
                      name={lead.name}
                      rewards={lead.rewards}
                      phone={lead.phone}
                      temp={lead.temp}
                      category={lead.category}
                      dark={dark}
                      leadArray={leadArray}
                      setLeadArray={setLeadArray}
                      mainArray={mainArray}
                    />
                  );
              })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}







function LeadCard({ name, rewards, phone, temp, category, id, dark, leadArray, setLeadArray, mainArray }) {

  function displayNumber(phone) {
    const phoneArray = phone.split("");
    let finalPhone = [];

    for (let i = 0; i < 10; i++) {
      if (i === 3 || i === 6) {
        finalPhone.push("-");
      }
      finalPhone.push(phoneArray[i]);
    }
    const phoneOutput = finalPhone.join("");

    return phoneOutput;
  }

  function handleDelete(key){
    const newArray = mainArray.filter((lead) => lead.id !== key);
    setLeadArray(newArray)
  }
  return (
    <TableRow>
      <TableCell className="hidden sm:table-cell">
        <img
          src={Person}
          alt="Product image"
          className="aspect-square rounded-md mx-auto"
          width="32px"
        />
      </TableCell>
      <TableCell className="font-medium">{name}</TableCell>
      <TableCell>
        <Badge variant={rewards}>{rewards}</Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">
        {displayNumber(phone)}
      </TableCell>
      <TableCell className="hidden md:table-cell">
        <Progress
          className={dark ? "bg-zinc-400 border-none" : null}
          value={temp}
        />
      </TableCell>
      <TableCell className="hidden md:table-cell">{category}</TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => handleDelete(id)} >Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}
