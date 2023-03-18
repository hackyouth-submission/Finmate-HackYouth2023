import React, { useState } from 'react';
import './bank.css';
import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom'

const banks = [
  {
    name: 'Vietcombank',
    logo: 'https://hopdungcardvisit.com/wp-content/uploads/2019/05/logo-ngan-hang-Vietcombank.png',
    value: 'vietcombank',
    accountInfo: {
    label: 'Account number',
    placeholder: 'Enter your Vietcombank account number',
    pattern: '[0-9]{10}',
    errorMessage: 'Please enter a valid 10-digit Vietcombank account number',
},
  },
  {
    name: 'Techcombank',
    logo: 'https://hopdungcardvisit.com/wp-content/uploads/2019/05/logo-ngan-hang-Techcombank.png',
    value: 'techcombank',
    accountInfo: {
    label: 'Account number',
    placeholder: 'Enter your Techcombank account number',
    pattern: '[0-9]{9}',
    errorMessage: 'Please enter a valid 9-digit Techcombank account number',
    },},
    {
        name: 'Agribank',
        logo: 'https://hopdungcardvisit.com/wp-content/uploads/2019/05/Agribank-logo.png',
        value: 'Agribank',
        accountInfo: {
        label: 'Account number',
        placeholder: 'Enter your Agribank account number',
        pattern: '[0-9]{9}',
        errorMessage: 'Please enter a valid 9-digit Agribank account number',
        },
    },
    {
    name: 'Vietinbank',
    logo: 'https://hopdungcardvisit.com/wp-content/uploads/2019/05/logo-ngan-hang-Vietinbank.png',
    value: 'Vietinbank',
    accountInfo: {
        label: 'Account number',
        placeholder: 'Enter your Vietinbank account number',
        pattern: '[0-9]{9}',
        errorMessage: 'Please enter a valid 9-digit Vietinbank account number',
    },
    },{
        name: 'Mbbank ',
        logo: 'https://hopdungcardvisit.com/wp-content/uploads/2019/05/logo-ngan-hang-MB.png',
        value: 'Mbbank ',
        accountInfo: {
            label: 'Account number',
            placeholder: 'Enter your Mbbank  account number',
            pattern: '[0-9]{9}',
            errorMessage: 'Please enter a valid 9-digit Mbbank  account number',
        },
        },{
            name: 'Bidv',
            logo: 'https://hopdungcardvisit.com/wp-content/uploads/2019/05/logo-ngan-hang-BIDV.png',
            value: 'Bidv',
            accountInfo: {
                label: 'Account number',
                placeholder: 'Enter your Bidv account number',
                pattern: '[0-9]{9}',
                errorMessage: 'Please enter a valid 9-digit Bidv account number',
            },
            }

];


function BankSelect() {
    const [selectedBank, setSelectedBank] = useState(banks[0].value);
  const [accountNumber, setAccountNumber] = useState('');

  const handleBankSelect = (bankValue) => {
    setSelectedBank(bankValue);
    setAccountNumber('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitting account number ${accountNumber} for bank ${selectedBank}`);
  };

  const selectedBankObj = banks.find((bank) => bank.value === selectedBank);

  return (
    <div>
      <div className="bank-select-container">
        {banks.map((bank) => (
          <div
            key={bank.value}
            className={`bank-card ${selectedBank === bank.value ? 'selected' : ''}`}
            onClick={() => handleBankSelect(bank.value)}
          >
            <div className="bank-logo">
              <img src={bank.logo} alt={bank.name} />
            </div>
            <div className="bank-name">
              {bank.name}
            </div>
          </div>
        ))}
      </div>
      {selectedBankObj && (
        <form onSubmit={handleSubmit}>
          <h2>Enter your account number for {selectedBankObj.name}:</h2>
          <label htmlFor="accountNumber">{selectedBankObj.accountInfo.label}</label>
          <input
            type="text"
            id="accountNumber"
            placeholder={selectedBankObj.accountInfo.placeholder}
            pattern={selectedBankObj.accountInfo.pattern}
            value={accountNumber}
            onChange={(event) => setAccountNumber(event.target.value)}
            required
          />
          <span className="error-message">{selectedBankObj.accountInfo.errorMessage}</span>
            <Link to='/payment'> <button type="submit">Submit</button> </Link>
            
        </form>
      )}
    </div>
  );
}


function handleSubmit(event) {
    event.preventDefault();
    history.push(`/payment?bank=${selectedBankObj.value}&accountNumber=${accountNumber}`);
  }
  
  const history = useHistory();


export default BankSelect;