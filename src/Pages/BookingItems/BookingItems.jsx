import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import SingleBookingItems from "./SingleBookingItems";

const BookingItems = () => {
  const [bookings, setBooking] = useState([]);

  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/booking?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBooking(data);
      });
  }, []);
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Service type</th>
            <th>Customer Info</th>
            <th>Date</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <SingleBookingItems
              key={booking._id}
              booking={booking}
            ></SingleBookingItems>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingItems;
