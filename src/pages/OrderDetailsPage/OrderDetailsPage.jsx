import AppHeader from "../../components/AppHeader/AppHeader";
import OrderInfo from "../../components/OrderInfo/OrderInfo";

const OrderDetailsPage = () => {
    return (
        <>
            <AppHeader/>
            <div className={"mt-10"}>
                <OrderInfo/>
            </div>
        </>
    );
};

export default OrderDetailsPage;