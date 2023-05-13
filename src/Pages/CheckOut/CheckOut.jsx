import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const CheckOut = () => {
  const service = useLoaderData();
  const {_id, title, price, img } = service;

    const handleBookService = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value 
        const email = form.email.value 
        const phone = form.phone.value 
        const date = form.date.value 
        const message = form.message.value 

        const order = {
            service_ID: _id,
            customerName: name,
            email,
            phone,
            price: price,
            date,
            img,
            serviceName: title,
            Description: message
        }
        console.log(order);

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            Swal.fire(
                'Successful',
                'Your order is complete',
                'success'
              )
        })
    }

  return (
    <div>
      <h1>services details about: {title}</h1>
      <div>
        <div className="card-body rounded-xl bg-gray-100 md:p-20">
          <form onSubmit={handleBookService}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="form-control">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="email"
                  placeholder="Your email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone number"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  type="date"
                  name="date"
                  placeholder="Price"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <input
                type="text"
                name="message"
                placeholder="Your email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-error">Confirm Order</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
