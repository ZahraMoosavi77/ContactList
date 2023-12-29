"use client";
import React, { useEffect, useState } from "react";
import Sort from "@/components/modules/Sort/Sort";
import Table from "@/components/modules/Table/Table";
import Pagination from "@/components/modules/Pagination/Pagination";
import usePagination from "@/hooks/Paginate/usePaginate";
import useSort from "@/hooks/Sort/useSort";
import { useSearchParams } from "next/navigation";
import { getSingleQuery } from "@/utils/Query/GetSingleQuery";
import { itemsCount } from "@/constants/constant";
const TableTemplate = ({ data, pageQuery, sortQuery }) => {
  const [queryValue, setQueryValue] = useState(1);
  const { sortedData } = useSort(data, sortQuery);
  const searchParams = useSearchParams();
  const { currentPageData, pagesCount } = usePagination(
    sortedData,
    queryValue,
    itemsCount
  );

  useEffect(() => {
    const scrollPosition = sessionStorage.getItem("scrollPosition");
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition));
    }
    const query = getSingleQuery(pageQuery);
    setQueryValue(query || 1);
  }, [searchParams.get(pageQuery), searchParams.get(sortQuery)]);

  return (
    <>
      {currentPageData.length > 0 ? (
        <div className="container p-5 md:px-10 flex flex-col gap-5 ">
          <div className="flex gap-2 ">
            <Sort query={sortQuery} />
          </div>
          <div>
            <Table data={currentPageData} />
          </div>
          <div>
            <Pagination
              query={pageQuery}
              currentPage={queryValue}
              pagesCount={pagesCount}
            />
          </div>
        </div>
      ) : (
        <span className="p-10">No Result</span>
      )}
    </>
  );
};

export default TableTemplate;
