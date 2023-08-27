import moment from "moment";
import "moment/locale/pt-br";
import Link from "next/link";

interface IHeaderProps {
  name: string;
  created_at: string;
  link: string;
}

export default function Header({ name, created_at, link }: IHeaderProps) {
  return (
    <header className="flex justify-between  w-full">
      <h1 className="text-2xl font-bold">
        <Link href={link} target="_blank">
          {name}
        </Link>
      </h1>
      <div className="flex text-lg font-thin ml-[20px]">
        <p className="mr-[10px]">Entrou em</p>
        <p>{moment(created_at).locale("pt").format("ll")}</p>
      </div>
    </header>
  );
}
