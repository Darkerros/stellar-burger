import {IOrderInfo} from "../../data/order-info-iterface";

export interface CreateOrderResponse {
    success: boolean;
    name: string;
    order: IOrderInfo;
}
