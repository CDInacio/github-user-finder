import Link from "next/link";
import { IoIosLink, IoLogoTwitter } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

interface ILinksProps {
  location: string;
  twitter_username: string;
  blog: string;
}

export default function Links({
  location,
  twitter_username,
  blog,
}: ILinksProps) {
  return (
    <div className="flex mt-[20px]">
      <span className="flex items-center text-white mr-[30px]">
        <IoLocationSharp size={35} />
        <span className={`ml-[10px] ${!location && "opacity-60"}`}>
          {location ? location : "Não disponível"}
        </span>
      </span>
      <span className="flex items-center text-white   mr-[30px]">
        <IoLogoTwitter size={35} />
        <span className={`ml-[10px] ${!twitter_username && "opacity-60"}`}>
          {twitter_username ? twitter_username : "Não disponível"}
        </span>
      </span>
      <span className="flex items-center text-white  ">
        <IoIosLink size={35} />
        <Link href={blog} target="_blank">
          <span className={`ml-[10px] ${!blog && "opacity-60"}`}>
            {blog ? blog : "Não disponível"}
          </span>
        </Link>
      </span>
    </div>
  );
}
