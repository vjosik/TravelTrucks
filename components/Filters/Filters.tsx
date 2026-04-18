"use client";

import { useQuery } from "@tanstack/react-query";
import { getFilters } from "../../lib/api";
import css from "./Filters.module.css";
import Button from "../UI/Button/Button";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const formatLabel = (text:string) => {
  return text
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export default function Filters() {
const router = useRouter();
  const searchParams = useSearchParams();



  const { data, isLoading } = useQuery({
    queryKey: ["filters"],
    queryFn: getFilters,
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const params = new URLSearchParams();
    formData.forEach((value, key) => {
      if (value) params.set(key, value as string);
    });

    // Обновляем URL (это триггерит useInfiniteQuery в Catalog)
    router.push(`?${params.toString()}`);
  };

  const handleReset = () => {
    router.push("/catalog"); // Или путь к твоему каталогу, чтобы сбросить всё
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <form className={css.filters} onSubmit={handleSubmit}>
      {/* Location Section */}
      <div className={css.group}>
        <label className={css.locationLabel} htmlFor="location">Location</label>
        <div className={css.locationWrapper}>
          <svg className={css.locationIcon} width="18" height="20" viewBox="0 0 18 20" fill="none">
            <path d="M9 11C10.6569 11 12 9.65685 12 8C12 6.34315 10.6569 5 9 5C7.34315 5 6 6.34315 6 8C6 9.65685 7.34315 11 9 11Z" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 19C12 15 16 11.6046 16 8C16 4.13401 12.866 1 9 1C5.13401 1 2 4.13401 2 8C2 11.6046 6 15 9 19Z" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <input 
            type="text" 
            id="location" 
            placeholder="Kyiv, Ukraine" 
            className={css.locationInput} 
            defaultValue={searchParams.get("location") || ""}
            name="location"
          />
        </div>
      </div>

      <h3 className={css.title}>Filters</h3>

      {/* Camper form */}
      <div className={css.group}>
        <p className={css.groupTitle}>Camper form</p>
        {data?.forms.map((form) => (
          <label key={form} className={css.option}>
            <input type="radio" name="form" value={form} defaultChecked={searchParams.get("form") === form} className={css.radioInput} />
            <span className={css.customRadio}></span>
            <span className={css.labelText}>{formatLabel(form)}</span>
          </label>
        ))}
      </div>

      {/* Engine */}
      <div className={css.group}>
        <p className={css.groupTitle}>Engine</p>
        {data?.engines.map((engine) => (
          <label key={engine} className={css.option}>
            <input type="radio" name="engine" value={engine} defaultChecked={searchParams.get("engine") === engine} className={css.radioInput} />
            <span className={css.customRadio}></span>
            <span className={css.labelText}>{formatLabel(engine)}</span>
          </label>
        ))}
      </div>

      {/* Transmission */}
      <div className={`${css.group} ${css.group_trans}`}>
        <p className={css.groupTitle}>Transmission</p>
        {data?.transmissions.map((tr) => (
          <label key={tr} className={css.option}>
            <input type="radio" name="transmission" value={tr} defaultChecked={searchParams.get("transmission") === tr} className={css.radioInput} />
            <span className={css.customRadio}></span>
            <span className={css.labelText}>{formatLabel(tr)}</span>
          </label>
        ))}
      </div>

      <Button text="Search" type="submit" className={css.searchBtn}/>
      
      <button type="reset" className={css.clearBtn} onClick={handleReset}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Clear filters
      </button>
    </form>
  );
}