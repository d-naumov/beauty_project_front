"use client"

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { Button } from '../../../components/ui/button';
import { FcCalendar } from "react-icons/fc";
import { FcClock } from "react-icons/fc";
import { FcCurrencyExchange } from "react-icons/fc";
import { FcRating } from "react-icons/fc";

function BookingList({ bookingList }) {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const [filteredBookings, setFilteredBookings] = useState([]);

  useEffect(() => {
    const filtered = bookingList.filter(booking => booking.status !== "CANCELED");
    setFilteredBookings(filtered);
  }, [bookingList]);

  const deleteBooking = async (bookingId) => {
    try {
      const res = await fetch(`/api/bookings/${bookingId}`, {
        method: "DELETE",
        headers: {
          "accept": "*/*",
        },
      });

      console.log("Delete booking response status:", res.status);

      if (!res.ok) {
        throw new Error(`Failed to delete booking with ID ${bookingId}.`);
      }

      console.log(`Booking with ID ${bookingId} deleted successfully.`);
     
      setFilteredBookings(prevBookings => prevBookings.filter(booking => booking.id !== bookingId));
    } catch (error) {
      console.error(`Error deleting booking with ID ${bookingId}:`, error);
    }
  };

  useEffect(() => {
    const fetchProcedureInfoForBookings = async () => {
      const updatedBookings = await Promise.all(bookingList.map(async (booking) => {
        if (booking.procedureId) {
          try {
            const res = await fetch(`/api/procedures/${booking.procedureId}`, {
              method: "GET",
              headers: {
                "accept": "*/*",
              },
            });
  
            if (!res.ok) {
              throw new Error(`Failed to fetch procedure info for procedure ID ${booking.procedureId}.`);
            }
  
            const procedureInfo = await res.json();
            return { ...booking, procedureInfo };
          } catch (error) {
            console.error(`Error fetching procedure info for procedure ID ${booking.procedureId}:`, error);
            return booking;
          }
        } else {
          return booking;
        }
      }));
  
      setFilteredBookings(updatedBookings);
    };
  
    fetchProcedureInfoForBookings();
  }, []);

  return (
    <div>
      {filteredBookings.map((booking, index) => (
        <div key={index} className="mb-4 flex gap-2 items-center border p-5 rounded-lg">
          <Image
            src="/photo-4.jpg" 
            alt="Appointment"
            width={70}
            height={70}
            className="rounded-full h-[70] w-[70] object-cover"
          />

          <div className="flex flex-col gap-2 w-full">
            <h2 className="text-lg font-semibold items-center flex justify-between">
              {booking.procedure && capitalizeFirstLetter(booking.procedure.name)}
              {new Date(booking.dateTime) > new Date() && 
                <Button 
                  className="text-green-600 border-green-600 hover:bg-red-400 hover:text-white"
                  variant="outline" 
                  onClick={() => deleteBooking(booking.id)}>
                  Cancel Appointment
                </Button>
              }
            </h2>

            <p className="flex gap-2">
            <FcCalendar /> 
              {new Date(booking.dateTime).toLocaleDateString(undefined, {
                weekday: 'short', // "Mon"
                year: 'numeric', // "2024"
                month: 'short', // "Apr"
                day: 'numeric', // "08"
              })}
            </p>

            <p className="flex gap-2">
            <FcClock /> At {new Date(booking.dateTime).toLocaleTimeString(undefined, {
                hour: '2-digit', // "04"
                minute: '2-digit', // "30"
                hour12: true // AM/PM
              })}
            </p>

            {booking.procedureInfo && (
  <div>
    <p className="flex gap-2">
      <FcCurrencyExchange /> Price: {booking.procedureInfo.price} $
    </p>
    <p className="flex gap-2" style={{ marginTop: '10px' }}>
      <FcRating /> Procedure: {booking.procedureInfo.name}
    </p>
  </div>
)}
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookingList;
