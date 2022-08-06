import React from "react";
import Image from "next/image";

const ListItem = ({ item }: { item: any }) => {
  return (
    <div className="py-12 px-20 bg-[#363636] rounded-8 flex items-center justify-between">
      <div className="text-text-white">{item.name}</div>
      <Image
        src={"/fabrik/chevron-right-solid.svg"}
        width={16}
        height={16}
        alt="right-arrow"
      />
    </div>
  );
};

export default ListItem;
