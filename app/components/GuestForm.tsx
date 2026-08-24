"use client";

import { useState } from "react";
import { createCustomer } from "../services/customerApi";
import { useRouter } from "next/navigation";

type GuestFormProps = {
  onSuccess: () => void;
};

export default function GuestForm({onSuccess}:GuestFormProps) {

    const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();

    await createCustomer({
      firstName: firstName,
      lastName: lastName,
      email: email,
    });
    router.refresh();
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="firstName"
          className="block text-xs uppercase tracking-widest text-charcoal"
        >
          Förnamn
        </label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          className="mt-4 w-full border-b border-charcoal bg-transparent pb-2 focus:border-steel focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="lastName"
          className="block text-xs uppercase tracking-widest text-charcoal"
        >
          Efternamn
        </label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          className="mt-4 w-full border-b border-charcoal bg-transparent pb-2 focus:border-steel focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-xs uppercase tracking-widest text-charcoal"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-4 w-full border-b border-charcoal bg-transparent pb-2 focus:border-steel focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="mt-10 w-full bg-black px-8 py-5 text-xs uppercase tracking-widest text-cream border border-black hover:bg-cream hover:text-black transition-colors"
      >
        Registrera gäst
      </button>
    </form>
  );
}
