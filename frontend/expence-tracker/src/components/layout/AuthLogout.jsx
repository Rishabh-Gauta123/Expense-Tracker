import React from 'react';
import expenseTrackerLogo from '../../assets/expense_tracker.png';


function AuthLogout({ children }) {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-gray-100 p-8">
        <h1 className="text-2xl font-bold mb-40 justify-center">This is Expense Tracker Authentication</h1>
        {children}
      </div>
      <div className="w-1/2 bg-blue-100 flex items-center justify-center">
        <img src={expenseTrackerLogo} alt="error loading image" />
      </div>
    </div>
  );
}

export default AuthLogout;
