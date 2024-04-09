
"use client"

import React, { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import BookingList from "../my-booking/_components/BookingList"


function MyBooking() {
  const [bookingList, setBookingList] = useState([]);

  useEffect(() => {
    getUserBookingList();
  }, []);

  const getUserBookingList = async () => {
    try {
      const currentUser = JSON.parse(sessionStorage.getItem('user'));

      if (!currentUser || !currentUser.id) {
        throw new Error("Current user is not available.");
      }

      const res = await fetch(`/api/bookings/active/${currentUser.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "accept": "*/*",
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch active bookings.");
      }

      const data = await res.json();
      console.log("Active bookings:", data);

      setBookingList(data); // Установка списка бронирований в состояние
    } catch (error) {
      console.error("Error fetching active bookings:", error);
    }
  };

  const filterUserBooking = (type) => {
    return bookingList.filter(item =>
      type === "upcoming" ? new Date(item.dateTime) >= new Date() : new Date(item.dateTime) <= new Date()
    );
  }

  return (
    <div className="px-4 sm:px-10 mt-10">
      <h2 className="font-bold text-xl">My Booking</h2>

      <Tabs defaultValue="upcoming" className="w-full mt-5 ">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="expired">Expired</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming"> <BookingList bookingList={filterUserBooking("upcoming")} /> </TabsContent>
        <TabsContent value="expired"> <BookingList bookingList={filterUserBooking("expired")} /> </TabsContent>
      </Tabs>
    </div>
  );
}

export default MyBooking;

