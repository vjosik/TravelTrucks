"use client";

import CamperList from "../../components/CamperList/CamperList";
import { getCampers } from "../../lib/api";
import Button from "../../components/UI/Button/Button";
import css from "./Catalog.module.css";
import { useInfiniteQuery } from "@tanstack/react-query";
import Filters from "../../components/Filters/Filters";
import { useSearchParams } from "next/navigation";
import { Engine, GetCampersParams, Transmission, VehicleForm } from "../../types/campersType";
import { Loader } from "../../components/Loader/Loader";

export default function Catalog() {
  const searchParams = useSearchParams();
  
  
  const filters: GetCampersParams = {
  location: searchParams.get("location") || undefined,
  form: (searchParams.get("form") as VehicleForm) || undefined,
  engine: (searchParams.get("engine") as Engine) || undefined,
  transmission: (searchParams.get("transmission") as Transmission) || undefined,
};
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ["campers", filters],
    queryFn: ({ pageParam = 1 }) => getCampers({ page: pageParam, perPage: 4, ...filters }),
    getNextPageParam: (lastPage, allPages) => {
      const totalLoaded = allPages.length * 4;
      return lastPage.total > totalLoaded ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
  });

  

  const allCampers = data?.pages.flatMap((page) => page.campers) || [];

  return (
    <div className={css.catalog_layout}>
      <aside className={css.sidebar}>
        <Filters />
      </aside>
      <div className={css.catalog_container}>
        {isLoading ? (
          <Loader/>
        ) : isError ? (
          <div>Error loading data</div>
        ) : (
          <>
            <CamperList campers={allCampers} />
            {hasNextPage && (
              <Button
                text={isFetchingNextPage ? "Loading..." : "Load More"}
                onClick={() => fetchNextPage()}
                disabled={isFetchingNextPage}
                className={css.load_more_btn}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
