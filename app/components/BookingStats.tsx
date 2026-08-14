import {
  countAvailableRooms,
  countCheckedInNow,
  countCheckInsToday,
  countCheckOutsToday,
} from "../lib/stats";
import { Booking } from "../models/Booking";
import { StatCard } from "./StatCard";

type BookingStatsProps = {
  bookings: Booking[];
};

export function BookingStats({ bookings }: BookingStatsProps){
  return (
    <div className="grid grid-cols-2">
      <StatCard
        value={countCheckInsToday(bookings)}
        label="Incheckningar idag"
      />
      <StatCard
        value={countCheckOutsToday(bookings)}
        label="Utcheckningar idag"
      />
      <StatCard value={countCheckedInNow(bookings)} label="Incheckade nu" />
      <StatCard value={countAvailableRooms(bookings)} label="Lediga rum" />
    </div>
  );
};
