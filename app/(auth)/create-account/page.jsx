"use client"

import React, { useState } from 'react';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import Link from 'next/link';

function CreateAccount() {
  const [userType, setUserType] = useState('CLIENT'); // По умолчанию устанавливаем статус клиента

  return (
    <div className="flex items-baseline justify-center my-20 ">
      <div
        className="flex flex-col items-center justify-center p-10 bg-blur-sm"
      >
        <h2 className="font-bold text-3xl">Ein Konto erstellen </h2>
        <h2 className="text-gray-500">
          Enter your Email and Password to Create an Account
        </h2>

        <div className="w-full flex flex-col gap-5 mt-7">
          <Input placeholder="Name" />
          <Input placeholder="Last name" />
          <Input placeholder="name@example.com" />
          <Input type="password" placeholder="Password" />
          <div>
            <label>
              <input
                type="radio"
                value="CLIENT"
                checked={userType === 'CLIENT'}
                onChange={() => setUserType('CLIENT')}
              />
              Client
            </label>
            <label>
              <input
                type="radio"
                value="MASTER"
                checked={userType === 'MASTER'}
                onChange={() => setUserType('MASTER')}
              />
              Master
            </label>
          </div>
          <Button>Eine Konto erstellen</Button>
          <p>
            Ich habe ein Konto{' '}
            <Link href={'/sign-in'} className="text-green-600 ml-3">
              -Klicken Sie hier, um sich anzumelden
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
