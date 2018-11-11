import React from 'react';
import SignOutButton from '../../components/sign-in/SignOut';
import BottomNavigation from '../../components/navigation/BottomNavigation'
import TopNavigation from '../../components/navigation/TopNavigation'
const Account = () =>
<div>
        <TopNavigation />
          <BottomNavigation />

  <div className="container">
    <h1>Account</h1>
    <li><SignOutButton /></li>

  </div>
  </div>

export default Account;
