import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import logan from "./assets/wolverine.jpg";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { color } from "./redux/themeSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ];

  const col= useSelector((state) => state.theme.status);
  return (
    <div
      className={`grid grid-cols-1 pt-2 ${
        col ? "bg-pink-400" : "bg-green-400"
      }`}
    >
      <div className="grid sm:grid-cols-[1.03fr_1fr] gap-5 grid-cols-1">
        <Table className="sahdow-lg border border-2 border-gray-200 ">
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell className="">{invoice.totalAmount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell className="">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
        <img
          src={logan}
          alt=""
          className="w-4/5 h-[48vh]  rounded-sm bg-red-400  mx-auto md:ml-12"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-[1.03fr_1fr]  mt-5 gap-5">
        <Card className="  h-56 flex  justify-center items-center ">
          <CardContent>Animated Text</CardContent>
        </Card>
        <Card className="  h-56 flex  justify-center items-center ">
          <CardContent>Animated Text</CardContent>
        </Card>
      </div>
      <div className="flex gap-5 justify-around flex-wrap mt-5">
        <Card className="w-full sm:w-80 ">
          <CardHeader>
            <CardTitle>Cognitive Therapy</CardTitle>
            <CardDescription>
              Improve mental processes & problem-solving skills.
            </CardDescription>
            <CardAction>Learn More</CardAction>
          </CardHeader>
          <CardContent>
            Our cognitive therapy sessions help clients reframe negative
            thoughts and develop effective coping strategies for daily life
            challenges.
          </CardContent>
          <CardFooter>Duration: 45 min per session</CardFooter>
        </Card>

        <Card className="w-full sm:w-80 ">
          <CardHeader>
            <CardTitle>Stress Management</CardTitle>
            <CardDescription>
              Techniques to handle stress effectively.
            </CardDescription>
            <CardAction>Learn More</CardAction>
          </CardHeader>
          <CardContent>
            We provide personalized stress management plans including breathing
            exercises, mindfulness, and relaxation techniques to help clients
            maintain mental balance.
          </CardContent>
          <CardFooter>Sessions: Weekly or Bi-weekly</CardFooter>
        </Card>

        <Card className="w-full sm:w-80 ">
          <CardHeader>
            <CardTitle>Child & Adolescent Therapy</CardTitle>
            <CardDescription>
              Support for children and teenagers facing emotional challenges.
            </CardDescription>
            <CardAction>Learn More</CardAction>
          </CardHeader>
          <CardContent>
            Our therapists work closely with young clients to improve social
            skills, manage anxiety, and build resilience through engaging and
            age-appropriate methods.
          </CardContent>
          <CardFooter>Age: 6–18 years</CardFooter>
        </Card>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-[2fr_1fr]  mb-4">
        <Card className=" p-4 ">
          <CardHeader>
            <CardTitle>Personalized Therapy Session</CardTitle>
            <CardDescription>
              Comprehensive therapy plan tailored to your needs
            </CardDescription>
            <CardAction>Book Now</CardAction>
          </CardHeader>
          <CardContent>
            Our personalized therapy sessions are designed to help you manage
            stress, anxiety, and emotional challenges. Each session includes
            one-on-one counseling, practical exercises, and follow-up guidance
            to ensure lasting results.
            <br />
            <br />
            <strong>Key Benefits:</strong>
            <ul className="list-disc list-inside">
              <li>Reduce anxiety and stress levels</li>
              <li>Improve emotional resilience</li>
              <li>Enhance problem-solving skills</li>
              <li>Develop mindfulness techniques</li>
            </ul>
          </CardContent>
          <CardFooter>
            Duration: 1 hour per session | Price: ₹1200/session
          </CardFooter>
        </Card>

        <Card className=" p-4">
          <CardHeader>
            <CardTitle>Upcoming Workshops</CardTitle>
            <CardDescription>Join our interactive sessions</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>Stress Management – 12 Oct</li>
              <li>Mindfulness for Beginners – 18 Oct</li>
              <li>Teen Emotional Support – 25 Oct</li>
            </ul>
            <br />
            <strong>Contact:</strong>
            <br />
            Phone: +91 98765 43210
            <br />
            Email: info@therapycenter.com
          </CardContent>
          <CardFooter>Seats are limited, register early!</CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Home;
