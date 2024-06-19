import { MoreHorizontal } from "lucide-react";

import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Progress } from "../../../components/ui/progress";
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

import Person from "../../assets/person.png";

export default function Cards({date, time}) {
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
            <TableRow>
              <TableCell className="hidden sm:table-cell">
                <img
                  src={Person}
                  alt="Product image"
                  className="aspect-square rounded-md mx-auto"
                  width="32px"
                />
              </TableCell>
              <TableCell className="font-medium">Hammed Sylla</TableCell>
              <TableCell>
                <Badge variant="diamond">Diamond</Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                215-713-5942
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Progress value={83} />
              </TableCell>
              <TableCell className="hidden md:table-cell">Mobile</TableCell>
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
            <TableRow>
              <TableCell className="hidden sm:table-cell">
                <img
                  src={Person}
                  alt="Product image"
                  className="aspect-square rounded-md object-cover mx-auto"
                  width="32px"
                />
              </TableCell>
              <TableCell className="font-medium">Martha Stewart</TableCell>
              <TableCell>
                <Badge variant="gold">Gold</Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                710-938-8927
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Progress value={63} />
              </TableCell>
              <TableCell className="hidden md:table-cell">TV</TableCell>
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
            <TableRow>
              <TableCell className="hidden sm:table-cell">
                <img
                  src={Person}
                  alt="Product image"
                  className="aspect-square rounded-md object-cover mx-auto"
                  width="32px"
                />
              </TableCell>
              <TableCell className="font-medium">John Bryant</TableCell>
              <TableCell>
                <Badge variant="platinum">Platinum</Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                301-653-8902
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Progress value={23} />
              </TableCell>
              <TableCell className="hidden md:table-cell">
                Internet & TV
              </TableCell>
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
            <TableRow>
              <TableCell className="hidden sm:table-cell">
                <img
                  src={Person}
                  alt="Product image"
                  className="aspect-square rounded-md object-cover mx-auto"
                  width="32px"
                />
              </TableCell>
              <TableCell className="font-medium">Tyrone Smalls</TableCell>
              <TableCell>
                <Badge variant="silver">Silver</Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                717-892-9208
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Progress value={43} />
              </TableCell>
              <TableCell className="hidden md:table-cell">
                Home Security
              </TableCell>
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
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
