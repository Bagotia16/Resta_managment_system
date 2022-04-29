import { useLocation } from "react-router-dom";

function OrderId(){
    const location = useLocation();
    console.log(location.state.item_data);
}

export default OrderId;