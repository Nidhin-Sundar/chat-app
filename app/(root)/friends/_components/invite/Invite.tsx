import { Button } from '@/components/ui/button';
import React, { useState } from 'react';

const Invite = () => {
  const [mail, setMail] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch('/api/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: mail }),
    });
    const json = await res.json();
    console.log(json);

    if (res.ok) {
      alert('Email sent successfully');
    } else {
      alert('Failed to send email');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        className="flex items-center w-full max-w-md mx-auto"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="Email"
          className="border-2 border-gray-300 rounded-l-md px-4 h-12 w-full"
          onChange={(e) => setMail(e.target.value)}
          value={mail}
          required
        />
        <Button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold h-12 px-4 rounded-r-md"
          type="submit"
        >
          Invite
        </Button>
      </form>
    </div>
  );
};

export default Invite;
