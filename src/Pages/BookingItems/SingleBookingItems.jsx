
const SingleBookingItems = ({ booking, handleDelete, handleConfirmBooking, status }) => {
  const {_id, email, price, date, img, customerName, serviceName } = booking;

  // const handleDelete = id =>{
  //   const proceed = confirm('are you sure!')
  //   if(proceed){
  //     fetch(`http://localhost:5000/booking/${id}` , {
  //       method: 'DELETE'
  //     })
  //     .then( res => res.json())
  //     .then( data => {
  //       console.log(data);
  //     })
  //   }
  // }

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask rounded-md w-24 h-24">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{serviceName}</div>
            <div className="text-sm opacity-50">ID: {_id}</div>
          </div>
        </div>
      </td>
      <td>
        {customerName}
        <br />
        <span className="badge badge-ghost badge-sm">{email}</span>
      </td>
      <td>{date}</td>
      <td>{price}</td>
      <th>
        { status === 'confirm' ? <span>Confirmed</span> :
          <button onClick={() => handleConfirmBooking(_id)} className="btn btn-error">Confirm</button>
        }
      </th>
    </tr>
  );
};

export default SingleBookingItems;
