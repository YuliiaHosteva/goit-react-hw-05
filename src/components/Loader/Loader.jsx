import { MagnifyingGlass } from 'react-loader-spinner';
import c from './Loader.module.css';


const Loader = () => (
    <div className={c.loader}>
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