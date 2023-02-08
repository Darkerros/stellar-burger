import AppHeader from "../../components/AppHeader/AppHeader";
import FeedDetails from "../../components/FeedDetails/FeedDetails";

const OrderDetailsPage = () => {
    return (
        <>
            <AppHeader/>
            <div className={"mt-10"}>
                <FeedDetails/>
            </div>
        </>
    );
};

export default OrderDetailsPage;