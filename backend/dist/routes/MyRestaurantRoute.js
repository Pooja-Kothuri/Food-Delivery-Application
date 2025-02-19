"use strict";
//multer middleware
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const express_1 = __importDefault(require("express"));
const MyRestaurantController_1 = __importDefault(require("../controllers/MyRestaurantController"));
const auth_1 = require("../middleware/auth");
const validation_1 = require("../middleware/validation");
const router = express_1.default.Router();
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024, //5mb
    }
});
//api/my/restaurant
//multer is going to check for imageFile field
router.post("/", upload.single("imageFile"), validation_1.validateMyRestaurantRequest, auth_1.jwtCheck, auth_1.jwtParse, MyRestaurantController_1.default.createMyRestaurant);
router.get("/", auth_1.jwtCheck, auth_1.jwtParse, MyRestaurantController_1.default.getMyRestaurant);
router.get("/order", auth_1.jwtParse, MyRestaurantController_1.default.getMyRestaurantOrders);
//patch -used to update part of entity
router.patch("/order/:orderId/status", auth_1.jwtCheck, auth_1.jwtParse, MyRestaurantController_1.default.updateOrderStatus);
router.put("/", upload.single("imageFile"), validation_1.validateMyRestaurantRequest, auth_1.jwtCheck, auth_1.jwtParse, MyRestaurantController_1.default.updateMyRestaurant);
exports.default = router;
