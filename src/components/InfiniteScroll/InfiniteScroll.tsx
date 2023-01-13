import React from "react";
import ScrollArea from "react-infinite-scroll-component";

type InfiniteScrollProps = {
  items: JSX.Element[];
  fetchData: () => void;
};

export const InfiniteScroll = ({ items, fetchData }: InfiniteScrollProps) => {
  return (
    <ScrollArea
      dataLength={items.length} //This is important field to render the next data
      next={fetchData}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {items}
    </ScrollArea>
  );
};
