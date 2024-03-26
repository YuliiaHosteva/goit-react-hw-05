import { MagnifyingGlass } from 'react-loader-spinner';
import css from './Loader.module.css';


const Loader = () => (
    <div className={css.loader}>
    <MagnifyingGlass
    visible={true}
    height="80"
    width="80"
    ariaLabel="magnifying-glass-loading"
    wrapperStyle={{}}
    wrapperClass="magnifying-glass-wrapper"
    glassColor="#c0efff"
    color="rgb(16, 74, 111);"
    />
    </div>
);

export default Loader;