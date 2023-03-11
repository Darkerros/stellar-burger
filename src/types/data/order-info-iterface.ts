export interface IOrderInfo {
    createdAt: string;
    ingredients: string[];
    name: string;
    number: number;
    status: "done" | "pending" | "created";
    _id: string;
}