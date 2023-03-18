import React, { useState } from 'react';
// import './BankSelect.css';

function BankSelect() {
const [selectedBank, setSelectedBank] = useState('');

const handleBankSelect = (event) => {
setSelectedBank(event.target.value);
};

const handleSubmit = (event) => {
event.preventDefault();
// perform action based on selected bank
};

return (
<form className="bank-select" onSubmit={handleSubmit}>
<label htmlFor="bank-select">Chọn ngân hàng:</label>
<select id="bank-select" name="bank" value={selectedBank} onChange={handleBankSelect}>
<option value="">-- Vui lòng chọn ngân hàng --</option>
<option value="vietcombank">Vietcombank</option>
<option value="techcombank">Techcombank</option>
<option value="vnpay">VNPay</option>
<option value="sacombank">Sacombank</option>
</select>
<button type="submit">Chuyển đến</




++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++button>
</form>
);
}

export default BankSelect;