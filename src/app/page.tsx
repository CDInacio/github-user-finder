"use client";
import { getUser } from "@/lib/getUser";

import Bio from "@/components/Bio";
import Header from "@/components/Header";
import Info from "@/components/Info";
import Links from "@/components/Links";
import Image from "next/image";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IUser } from "./@types/user";

export default function Home() {
  const [searchString, setSearchString] = useState<string>("");
  const [user, setUser] = useState<IUser>();

  const handleGetUser = async () => {
    setSearchString("");
    try {
      const response = await getUser(searchString);
      setUser(response);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message, { autoClose: 3000 });
      }
    }
  };

  return (
    <main className="  mt-[300px]">
      <div className="flex w-[850px] flex-col mx-auto">
        <div className="relative h-[80px] mb-[30px]">
          <input
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
            className="bg-darkLighter rounded-xl pl-[90px]  w-full h-full  focus:bg-darkLight  transition-all 300 ease text-white"
          />
          <IoSearchOutline
            size={30}
            className="absolute top-1/2 h-full left-[30px] transform -translate-y-1/2 text-2xl text-primary"
          />
          <button
            onClick={handleGetUser}
            className="absolute font-bold text-xl top-[8%] right-[10px] bg-primary text-white rounded-xl px-[30px] py-[20px] cursor-pointer"
          >
            Procurar
          </button>
        </div>
        {user && (
          <div className="  bg-darkLighter rounded-xl p-[40px]">
            <div className="flex justify-center">
              <div className=" w-1/4">
                <Image
                  height={150}
                  width={150}
                  className="rounded-full"
                  src={user?.avatar_url ?? ""}
                  alt="user avatar"
                />
              </div>
              <div className="ml-[30px]  w-3/4">
                <div className="w-full text-white ">
                  <Header
                    link={user.html_url}
                    created_at={user.created_at}
                    name={user.name}
                  />
                  <Bio
                    text={user.bio ? user.bio : "Este usuário não possui bio"}
                  />
                  <Info
                    repos={user.public_repos}
                    followers={user.followers}
                    following={user.following}
                  />
                </div>
                <Links
                  blog={user.blog}
                  location={user.location ?? ""}
                  twitter_username={user.twitter_username ?? ""}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </main>
  );
}
