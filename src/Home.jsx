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
import { useState } from "react";
import Bloomcare from "./assets/Bloomcare.png";
import bookstore from "./assets/bookstore.png";

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

  const [mouse, setMouse] = useState(false);

  const col = useSelector((state) => state.theme.status);
  return (
    <div
      className={`text-white grid grid-cols-1 pt-2 ${
        col ? "bg-pink-950" : "bg-blue-950"
      }`}
    >
      <div className="grid sm:grid-cols-[1.03fr_1fr] gap-5 grid-cols-1 px-5">
        <Table className="sahdow-lg  ">
          <TableHeader>
            <TableRow className={`${col?"bg-pink-950 hover:bg-pink-600":"bg-blue-950 hover:bg-blue-600"}`}>
              <TableHead className={`text-white/80`}>Invoice</TableHead>
              <TableHead className={`text-white/80`}>Status</TableHead>
              <TableHead className={`text-white/80`}>Method</TableHead>
              <TableHead className={`text-white/80`}>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow
                className={`${
                  col
                    ? "bg-pink-950 hover:bg-pink-600"
                    : "bg-blue-950 hover:bg-blue-600"
                }`}
                key={invoice.invoice}
              >
                <TableCell>{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell>{invoice.totalAmount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow
              className={`${
                col
                  ? "bg-pink-950 hover:bg-pink-600"
                  : "bg-blue-950 hover:bg-blue-600"
              }`}
            >
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
        <img
          src={logan}
          alt=""
          className=" w-[90%] h-[48vh]  rounded-sm   mx-auto md:ml-12 transition-transform duration-500 hover:rotate-360"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-[1.03fr_1fr]  mt-5 gap-5 px-5">
        <Card
          className={`hover:scale-105 hover:invert transition-all duration-500 h-56 flex  justify-center items-center text-white ${
            col ? "bg-pink-950" : "bg-blue-950"
          }`}
          onMouseOver={() => {
            setMouse(true);
          }}
        >
          <CardContent>
            {mouse ? (
              <img src={Bloomcare} alt="" className="w-96 h-56" />
            ) : (
              <h1 className="text-xl">Hover on it to see the image</h1>
            )}
          </CardContent>
        </Card>
        <Card
          className={`hover:scale-105 hover:invert transition-all duration-500 h-56 flex  justify-center items-center text-white ${
            col ? "bg-pink-950" : "bg-blue-950"
          }`}
          onMouseOver={() => {
            setMouse(true);
          }}
        >
          <CardContent>
            {" "}
            <CardContent>
              {mouse ? (
                <img src={bookstore} alt="" className="w-96 h-56" />
              ) : (
                <h1 className="text-xl">Hover on it to see the image</h1>
              )}
            </CardContent>
          </CardContent>
        </Card>
      </div>
      <div
        className={`flex gap-5 px-5  justify-around flex-wrap mt-5  ${
          col ? "bg-pink-950" : "bg-blue-950"
        } `}
      >
        <Card
          className={`hover:scale-105 hover:invert transition-all duration-500 hover:border-sky-400 drop-shadow-2xl  w-full sm:w-80  text-white  ${
            col ? "bg-pink-950" : "bg-blue-950"
          }`}
        >
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

        <Card
          className={`hover:scale-105 hover:invert transition-all duration-500 w-full hover:border-sky-400 sm:w-80  text-white  ${
            col ? "bg-pink-950" : "bg-blue-950"
          }`}
        >
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

        <Card
          className={`w-full hover:invert hover:border-sky-400 hover:scale-105 transition-all duration-500 sm:w-80 bg-blue-950 text-white ${
            col ? "bg-pink-950" : "bg-blue-950"
          }`}
        >
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
      <div className="mt-5 px-5 grid grid-cols-1 gap-10 md:grid-cols-[1.8fr_1fr]  mb-4">
        <Card
          className={`hover:invert hover:scale-105 transition-all duration-500 p-4 bg-blue-950 text-white ${
            col ? "bg-pink-950" : "bg-blue-950"
          }`}
        >
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

        <Card
          className={`hover:invert hover:scale-105 transition-all duration-500 p-4 bg-blue-950 text-white ${
            col ? "bg-pink-950" : "bg-blue-950"
          }`}
        >
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
