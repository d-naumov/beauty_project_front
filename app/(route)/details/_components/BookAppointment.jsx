"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog";
import { Calendar } from "../../../components/ui/calendar";
import { CalendarDays } from "lucide-react";
import { Clock } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { toast } from 'sonner';



function BookAppointment() {
  const [date, setDate] = useState(new Date());
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  

  useEffect(() => {
    getTime();
  }, []);

  const getTime = () => {
    const timeList = [];

    for (let i = 10; i <= 12; i++) {
      timeList.push({ time: `${i}:00 AM` });
      timeList.push({ time: `${i}:30 AM` });
    }

    for (let i = 1; i <= 6; i++) {
      timeList.push({ time: `${i}:00 PM` });
      timeList.push({ time: `${i}:30 PM` });
    }

    setTimeSlots(timeList);
  };


  const isPastDay = (day) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return day < today;
  };


  const isSlotBooking=(time)=> {
   return timeSlots.find(item=>item.time)
  }

  const saveBooking = async () => {
    
    try {
      if (!selectedTimeSlot) {
        throw new Error("Please select a time slot.");
      }

      const bookingData = {
        user: {
          id: 7
        },
        procedure: {
          id: 1
        },
        dateTime: new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate(),
          parseInt(selectedTimeSlot.split(":")[0]),
          parseInt(selectedTimeSlot.split(":")[1]),
          0
        ).toISOString(),
        status: "PENDING",
        totalPrice: 0
      };

      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "accept": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      if (!selectedTimeSlot) throw new Error("Please select a time slot.");
        const data = await res.json();
        console.log("Booking saved for", date, selectedTimeSlot);
        console.log(data);
        sessionStorage.setItem('user', JSON.stringify(data))
        toast("Booking confirmed", { type: "success" });
      } catch (error) {
        console.error("Error booking appointment:", error);
        toast(error.message, { type: "error" });
      }
    };

  return (
    <Dialog>
      <DialogTrigger>
      <div style={{
            cursor: "pointer",
            padding: "10px 20px",
            backgroundColor: "black",
            color: "#fff",
            borderRadius: "15px",
            marginTop: "5px",
          }}
        >
          Termin machen
        </div>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <div className="text-center">Termin</div>
          </DialogTitle>
          <DialogDescription>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-5 ">
              <div className="flex flex-col items-baseline gap-3">
                <h2 className="flex gap-2 items-center">
                  <CalendarDays className="text-green-800 h-5 w-5" />
                  Datum auswählen
                </h2>
                <Calendar 
                mode="single" 
                selected={date} 
                onSelect={setDate} 
                disabled={isPastDay} 
                className="rounded-md border"/>
              </div>

              <div>
                <div className="mt-3 md:mt-0">
                  <h2 className="flex gap-2 items-center mb-5">
                    <Clock className="text-green-800 h-5 w-5" />
                    Verfügbare Zeiten
                  </h2>

                  <div className="grid grid-cols-3 gap-3">
                    {timeSlots?.map((item, index) => (
                      <h2 
                        key={index}
                        disabled={isSlotBooking(item.time)}
                        onClick={() => setSelectedTimeSlot(item.time)}
                        className={`p-2 border rounded-full text-center
                          hover:bg-green-600 hover:text-white cursor-pointer
                          ${item.time === selectedTimeSlot && "bg-green-600 text-white" }`}>
                        {item.time}
                      </h2>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>


        <DialogFooter className="flex justify-between mr-5">
          <DialogClose asChild>
            <div >
              <Button className="m-3" variant="destructive" >Close</Button>
              <Button onClick={saveBooking} disabled={!(date&&selectedTimeSlot)}>Book</Button>
            </div>
          </DialogClose>
        </DialogFooter>

      </DialogContent>
    </Dialog>
  );
}

export default BookAppointment;

