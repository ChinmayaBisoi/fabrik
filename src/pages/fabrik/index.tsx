import React from "react";
import Image from "next/image";
import MainContent from "../../components/fabrik/main-content";

const Index = () => {
  return (
    <div className="grid md:grid-cols-12 grid-cols-4 min-h-screen">
      <div className="hidden md:col-span-2 bg-[#242424] py-20 px-40 md:flex flex-col items-center">
        <div className="w-106 h-24 mt-24">
          <Image
            src="/fabrik/fabrik_full_logo.png"
            width={106}
            height={24}
            alt="fabrik-logo"
          />
        </div>
        {/* <div className="h-full">

        </div> */}
      </div>
      <MainContent />
    </div>
  );
};

export default Index;
