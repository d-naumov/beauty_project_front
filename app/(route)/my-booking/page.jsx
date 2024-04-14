"use client"

import React, { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import BookingList from "../my-booking/_components/BookingList";

function MyBooking({ accessToken }) {
  const [bookingList, setBookingList] = useState([]);

  useEffect(() => {
    getUserBookingList();
  }, [accessToken]); 

  const getUserBookingList = async () => {
    try {
      const currentUser = JSON.parse(sessionStorage.getItem('user'));
console.log("Current user:", currentUser);

if (!currentUser || !currentUser.accessToken) {
  console.error("Access token is missing:", currentUser);
  throw new Error("Access token is missing.");
}

const tokenPayload = currentUser.accessToken.split('.')[1];
const decodedToken = JSON.parse(atob(tokenPayload));
console.log("Decoded token:", decodedToken);

if (!decodedToken || !decodedToken.user_id) {
  console.error("User ID is missing in decoded token:", decodedToken);
  throw new Error("User ID is missing in decoded token.");
}

const userId = decodedToken.user_id;
console.log("User ID:", userId);


const res = await fetch(`/api/bookings/active/${userId}`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${currentUser.accessToken}`,
    "accept": "*/*",
  },
});

      console.log("Response status:", res.status);
      const data = await res.json();
      console.log("Response data:", data);

      if (!res.ok) {
        throw new Error("Failed to fetch active bookings.");
      }

      setBookingList(data);
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