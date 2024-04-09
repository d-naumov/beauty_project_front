"use client"

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { CalendarDays } from "lucide-react";
import { Clock } from "lucide-react";
import { FaWallet } from 'react-icons/fa';
import { Button } from '../../../components/ui/button';

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

      if (!res.ok) {
        throw new Error(`Failed to delete booking with ID ${bookingId}.`);
      }

      console.log(`Booking with ID ${bookingId} deleted successfully.`);
      // Если бронирование успешно удалено, обновляем список бронирований
      setFilteredBookings(prevBookings => prevBookings.filter(booking => booking.id !== bookingId));
    } catch (error) {
      console.error(`Error deleting booking with ID ${bookingId}:`, error);
    }
  };

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
            <h2 className="text-lg font-semibold items-center flex justify-between">{capitalizeFirstLetter(booking.procedure.name)}
            {new Date(booking.dateTime) > new Date() && 
            <Button 
            className="text-green-600 border-green-600 hover:bg-red-400 hover:text-white"
            variant="outline" 
            onClick={() => deleteBooking(booking.id)}>Cancel Appointment</Button>}
            </h2>
            <p className="flex gap-2"><CalendarDays /> {new Date(booking.dateTime).toLocaleDateString(undefined, {
              weekday: 'short', // "Mon"
              year: 'numeric', // "2024"
              month: 'short', // "Apr"
              day: 'numeric', // "08"
            })} 
            </p>

            <p className="flex gap-2"><Clock/> At {new Date(booking.dateTime).toLocaleTimeString(undefined, {
              hour: '2-digit', // "04"
              minute: '2-digit', // "30"
              hour12: true // AM/PM
            })}</p>
            <p className="flex gap-2"><FaWallet /> Price: {booking.procedure.price} $</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookingList;
