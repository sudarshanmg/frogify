"use client";
import Header from "@/components/Header";
import { useUser } from "@/hooks/useUser";

const Account = async () => {
  const { user } = useUser();

  return (
    <div
      className="
        bg-neutral-900 
        rounded-lg 
        h-full 
        w-full 
        overflow-hidden 
        overflow-y-auto
      "
    >
      <Header>
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">Your Account</h1>
          <p className="text-gray-400 text-2xl font-semibold">
            Email: {user?.email}
          </p>
        </div>
      </Header>
    </div>
  );
};

export default Account;
