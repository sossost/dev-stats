import { HTMLAttributes } from "react";
import Image from "next/image";

import { Section } from "../common";
import { ContributionsType } from "@/types";

type ContributionProps = {
  contributionsData: ContributionsType[] | null;
} & HTMLAttributes<HTMLElement>;

export const Contribution = ({
  contributionsData,
  ...props
}: ContributionProps) => {
  return (
    <Section title="Contribution" {...props}>
      <div className="grid grid-cols-2 grid-rows-3 w-full h-full gap-1">
        {contributionsData?.map((repo, index) => (
          <div key={index} className="flex flex-col gap-2 p-3 overflow-auto">
            <div className="flex gap-3 items-center">
              <Image
                src={repo.avatarUrl}
                alt={`${repo.repository} image`}
                width={36}
                height={36}
                className="rounded-full max-w-9 max-y-9 flex-shrink"
              />
              <div className="flex flex-col">
                <h2 className="text-md font-semibold leading-4">
                  {repo.repository.split("/")[1]}{" "}
                </h2>
                <span className="text-sm text-blue-900/50">
                  ★{(repo.stargazerCount / 1000).toFixed(1)}k
                </span>
              </div>
            </div>
            <ul>
              {/* {repo.pullRequests.map((pr, idx) => (
                <li key={idx} className="list-disc ml-4">
                  <a href={pr.url} target="_blank" rel="noopener noreferrer">
                    <p className="hover:underline text-[13px] leading-4">
                      {pr.title}
                    </p>
                  </a>
                </li>
              ))} */}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};
