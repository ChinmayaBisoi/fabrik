import React from "react";
import Image from "next/image";
import Link from "next/link";

const ListItem = ({ item }: { item: any }) => {
  return (
    <Link href={`/fabrik/model/${item}`}>
      <div className="py-12 px-20 bg-[#363636] hover:bg-[#515151] rounded-8 flex items-center justify-between cursor-pointer">
        <div className="text-text-white">{item}</div>
        <Image
          src={"/fabrik/chevron-right-solid.svg"}
          width={16}
          height={16}
          alt="right-arrow"
        />
      </div>
    </Link>
  );
};

export default ListItem;
