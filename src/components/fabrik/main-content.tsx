import React, { useEffect } from "react";
import Image from "next/image";
import ListItem from "./list-item";

const basic = [
  {
    name: "lorem lorem",
  },
  {
    name: "lorem lorem",
  },
  {
    name: "lorem lorem",
  },
  {
    name: "lorem lorem",
  },
  {
    name: "lorem lorem",
  },
  {
    name: "lorem lorem",
  },
  {
    name: "lorem lorem",
  },
  {
    name: "lorem lorem",
  },
  {
    name: "lorem lorem",
  },
  {
    name: "lorem lorem",
  },
  {
    name: "lorem lorem",
  },
  {
    name: "lorem lorem",
  },
  {
    name: "lorem lorem",
  },
  {
    name: "lorem lorem",
  },
];

const MainContent = () => {
  useEffect(() => {
    console.log(1);
  }, []);
  return (
    <div className="md:col-span-10 bg-[#121212] md:px-15 flex flex-col col-span-full">
      <div className="relative h-214 w-full">
        <Image
          src="/fabrik/community-bg.png"
          layout="fill"
          objectFit="cover"
          objectPosition={"left"}
          alt="community-bg"
        />
        <div className="absolute p-48 flex flex-col w-full">
          <div className="bg-[#121212] px-10 mt-8 mb-16 text-40 text-text-white mx-auto rounded-12">
            Community
          </div>
          <div className="bg-[#121212] text-20 mb-8 px-10 py-4 text-text-white mx-auto rounded-12">
            Ideas Of Open World
          </div>
        </div>
      </div>
      <div className="p-16 flex justify-between items-center">
        <div className="bg-[#242424] px-12 py-6 relative flex items-center space-x-8 rounded-8 border border-[#6c757d]">
          <div className="w-20 min-w-20 h-20">
            <Image
              src="/fabrik/search-solid.svg"
              width={20}
              height={20}
              alt="search-icon"
            />
          </div>

          <input
            type="text"
            className="outline-none bg-[#242424] text-text-white"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="m-16 px-16 py-12 bg-[#242424] rounded-8 flex-grow md:max-h-400 max-h-350 flex-col space-y-12 overflow-y-scroll">
        {basic.map((item) => {
          return <ListItem key={item.name} item={item} />;
        })}
      </div>
    </div>
  );
};

export default MainContent;
