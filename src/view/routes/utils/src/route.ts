import { AdminListPage, CategoryPage, ErrorPage, HomePage, LoginPage, NotificationPage, ParameterPage, SettingPage} from "../../../pages";
import { links } from "./links";

export const routes = [
    {
        path: links.home,
        Component: HomePage
    },
    {
        path: links.login,
        Component: LoginPage
    },
    {
        path: links.setting,
        Component: SettingPage
    },
    {
        path: links.notification,
        Component: NotificationPage
    },
    
    {
        path: links.admins,
        Component: AdminListPage
    },
    
    {
        path: links.parameter,
        Component: ParameterPage
    },
    {
        path: links.categories,
        Component: CategoryPage
    },
    {
        path: links.error,
        Component: ErrorPage
    },
]