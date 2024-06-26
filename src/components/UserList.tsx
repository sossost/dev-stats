import Image from "next/image";
import Link from "next/link";

import { AsyncState } from "@/types";

import { Fallback } from "./Fallback";

type SearchedUserListProps = {
  userList: {
    login: string;
    avatar_url: string;
  }[];
  aysncState: AsyncState;
};

export const SearchedUserList = ({
  userList,
  aysncState,
}: SearchedUserListProps) => {
  if (aysncState !== "SUCCESS") {
    return <Fallback aysncState={aysncState} />;
  }

  return (
    <ul className="pt-2 h-full">
      {userList.map(user => (
        <li key={user.login}>
          <Link
            href={`/${user.login}`}
            passHref={true}
            className="
                flex items-center py-1 px-4 hover:bg-blue-50 
                cursor-pointer gap-3
               "
          >
            <Image
              src={user.avatar_url}
              alt={user.login}
              width={24}
              height={24}
              placeholder="empty"
              className="
                  rounded-full outline-1 outline
                  bg-blue-100  outline-blue-100
                "
            />
            {user.login}
          </Link>
        </li>
      ))}
    </ul>
  );
};
