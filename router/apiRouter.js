import express from "express";
import api from "../api/customer.js";

const apiRouter = express.Router();

apiRouter.get("/customer/orders", api.getCustomerOrders);
apiRouter.post("/customer/update", api.updateCustomer);
apiRouter.get("/customer/addresses", api.getCustomerAddresses);
apiRouter.post("/customer/address", api.createCustomerAddress);

export default apiRouter;