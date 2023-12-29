import { getLocalData } from "@/utils/Fetch/GetLocalData";
import React from "react";
import SearchSection from "./_components/layout/SearchSection";

const SearchPage = async () => {
  const data = await getLocalData();
  return (
    <>
      <SearchSection data={data.users} />
    </>
  );
};

export default SearchPage;
