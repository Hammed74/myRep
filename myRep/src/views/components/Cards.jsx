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

export default function Cards({date, time, newLead, leadArray, setLeadArray, search}) {




  return (
    <Card>
      <CardHeader>
        <CardTitle>{time}</CardTitle>
        <CardDescription>{date}</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">Image</span>
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Rewards</TableHead>
              <TableHead className="hidden md:table-cell">
                Phone Number
              </TableHead>
              <TableHead className="hidden md:table-cell">Temp</TableHead>
              <TableHead className="hidden md:table-cell">Category</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leadArray && leadArray.map((lead) => {

              if (
                lead.name.toLowerCase().includes(search.toLowerCase()) ||
                lead.rewards.toLowerCase().includes(search.toLowerCase()) ||
                lead.category.toLowerCase().includes(search.toLowerCase())
              )
                return (
                  <LeadCard
                    key={uuidv4()}
                    name={lead.name}
                    rewards={lead.rewards}
                    phone={lead.phone}
                    temp={lead.temp}
                    category={lead.category}
                  />
                );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}







function LeadCard({ name, rewards, phone, temp, category, date, notes }) {
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
      <TableCell className="hidden md:table-cell">{phone}</TableCell>
      <TableCell className="hidden md:table-cell">
        <Progress value={temp} />
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
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}
