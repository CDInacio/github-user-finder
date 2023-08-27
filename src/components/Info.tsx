interface IInfoProps {
  repos: number;
  followers: number;
  following: number;
}

export default function Info({ repos, followers, following }: IInfoProps) {
  return (
    <div className=" bg-dark flex justify-between p-[20px] rounded-xl font-thin">
      <span className="flex flex-col items-center ">
        Repos <span className="font-bold text-2xl mt-[10px]">{repos}</span>
      </span>
      <span className="flex flex-col items-center">
        Seguidores{" "}
        <span className="font-bold text-2xl mt-[10px]"> {followers}</span>
      </span>
      <span className="flex flex-col items-center">
        Seguindo
        <span className="font-bold text-2xl mt-[10px]">{following}</span>
      </span>
    </div>
  );
}
