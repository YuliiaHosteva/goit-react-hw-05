import { Link } from "react-router-dom";
import css from "../NotFoundPage/NotFoundPage.module.css"

export default function NotFoundPage() {
  return (
    <div className={css.containerErrorPage}>
      Oops! The page is not found! 
      <Link className={css.containerErrorPageLink} to="/">Back to Home Page</Link>
    </div>
  );
}