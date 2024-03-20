import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import css from "../MoviesFilter/MoviesFilter.module.css"



export default function MoviesFilter({ onSubmit }) {
  const [params, setParams] = useSearchParams();
  const [isFocused, setIsFocused] = useState(false);

  const changeFilter = (query) => {
    params.set("query", query);
    setParams(params);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryValue = e.target.query.value.trim();
    if (!queryValue) {
      toast.error("Please enter anything in the field of search");
      return;
    }
    if (queryValue.length < 1) {
      toast.error("To shot");
      return;
    }
    if (queryValue.length > 50) {
      toast.error("To long");
      return;
    }

    changeFilter(queryValue);

    onSubmit(queryValue);
  };



  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
        className={css.input}
        type="text"
        name="query"
        autoFocus={true}
        placeholder={isFocused ? '' : "Search movies..."}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required
        />
        <button className={css.btn} type="submit">Search</button>
      </form>
    </>
  );
}