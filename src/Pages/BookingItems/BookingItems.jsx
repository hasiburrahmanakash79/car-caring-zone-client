import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import SingleBookingItems from "./SingleBookingItems";
import Swal from "sweetalert2";

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
  }, [url]);

  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/booking/item/${id}`,{
          method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deleteCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = bookings.filter(booking => booking._id !== id)
              setBooking(remaining)
            }
          });
      }
    });
  };


  const handleConfirmBooking = id =>{
    fetch(`http://localhost:5000/booking/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify({status: true})
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if(data.modifiedCount > 0){
        //updated
        const remaining = bookings.filter(booking => booking._id !== id)
        const updated = bookings.find(booking => booking._id === id)
        updated.status = 'confirm'
        const newBooking = [updated, ...remaining]
        setBooking(newBooking)

      }
    })
  }


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
              handleDelete={handleDelete}
              handleConfirmBooking = {handleConfirmBooking}
            ></SingleBookingItems>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingItems;
