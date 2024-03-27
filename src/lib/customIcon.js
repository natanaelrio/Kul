
import { IoShieldOutline } from "react-icons/io5";

const CustomIcon = ({ value }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}><IoShieldOutline />&nbsp; {value} </div>
    )
}

export default CustomIcon;