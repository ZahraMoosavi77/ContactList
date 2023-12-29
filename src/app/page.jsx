import React from "react";
import { getLocalData } from "@/utils/Fetch/GetLocalData";
import dynamic from "next/dynamic";
import Loader from "@/components/modules/Loader/Loader";

const TableTemplate = dynamic(() => import("@/components/templates/TableTemplate"), {
  loading: () => <Loader/>,
  ssr: false,
});

const Home = async () => {
  const data = await getLocalData();
  return (
    <>
      <TableTemplate data={data.users} pageQuery={"page"} sortQuery={"sort"} />
    </>
  );
};

export default Home;
