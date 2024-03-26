import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import css from "../MoviesFilter/MoviesFilter.module.css";

export default function MoviesFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState(searchParams.get("query") ?? "");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query) {
      toast.error("Please enter anything in the field of search");
      return;
    }

    searchParams.set("query", query);
    setSearchParams(searchParams);
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={query}
          className={css.input}
          type="text"
          name="query"
          autoFocus={true}
          placeholder={isFocused ? "" : "Search movies..."}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </>
  );
}
