
// import './payment.css';

// import React, { useState }  from 'react';

// function Payment() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [cardNumber, setCardNumber] = useState('');
//   const [expiryMonth, setExpiryMonth] = useState('');
//   const [expiryYear, setExpiryYear] = useState('');
//   const [cvv, setCvv] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Validate form inputs
//     // Process payment
//     // Display success/failure message
//   };

//   return (
//     <div className="container">
//       <h2>Make a Payment</h2>
//       <form onSubmit={handleSubmit} className="form">
//         <div className="form-group">
//           <label htmlFor="name">Name on Card:</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="cardNumber">Card Number:</label>
//           <input
//             type="text"
//             id="cardNumber"
//             value={cardNumber}
//             onChange={(e) => setCardNumber(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="expiryMonth">Expiration Date:</label>
//           <div className="expiry-date">
//             <input
//               type="number"
//               id="expiryMonth"
//               value={expiryMonth}
//               onChange={(e) => setExpiryMonth(e.target.value)}
//               placeholder="MM"
//               min="1"
//               max="12"
//               required
//             />
//             <span>/</span>
//             <input
//               type="number"
//               id="expiryYear"
//               value={expiryYear}
//               onChange={(e) => setExpiryYear(e.target.value)}
//               placeholder="YY"
//               min={new Date().getFullYear().toString().substr(-2)}
//               max={(new Date().getFullYear() + 10).toString().substr(-2)}
//               required
//             />
//           </div>
//         </div>
//         <div className="form-group">
//           <label htmlFor="cvv">CVV:</label>
//           <input
//             type="number"
//             id="cvv"
//             value={cvv}
//             onChange={(e) => setCvv(e.target.value)}
//             placeholder="123"
//             minLength="3"
//             maxLength="4"
//             required
//           />
//         </div>
//         <button className="pay-button">Pay Now</button>
//       </form>
//     </div>
//   );
// }

// export default Payment;


import { useLocation } from 'react-router-dom';

function Payment() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const bank = params.get('bank');
  const accountNumber = params.get('accountNumber');

  // use bank and accountNumber to display payment information
  return (
    <div>
      <h2>Payment Information:</h2>
      <p>Bank: {bank}</p>
      <p>Account Number: {accountNumber}</p>
      // other payment information
    </div>
  );
}

export default Payment;

