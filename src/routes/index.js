import HomePage from "../pages/homePage/homePage";
import OrderPage from "../pages/orderPage/orderPage";
import ProductPage from "../pages/productPage/productPage";
import NotFoundPage from "../pages/notFoundPage/notFoundPage";

export const router = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: '/order',
        page: OrderPage,
        isShowHeader: true
    },
    {
        path: '/product',
        page: ProductPage,
        isShowHeader: true
    },
    {
        path: '*',
        page: NotFoundPage
    }
]