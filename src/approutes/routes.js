import { Route, Routes } from "react-router-dom";
import { AdminRouteNames } from "./route-constant";
import { Login as AdminLogin } from "../super-admin/Login";
import AdminDashboard from "../super-admin/dashboard";
import AdminRoutes from "./adminRoutes";
import AdminForgotPassword from "../super-admin/forgotpassword";
import Subscription from "../super-admin/subsciription";
import SubscriptionList from "../super-admin/subscriptionList";
import Settings from "../super-admin/settings";
import Application from "../super-admin/settings/Application";
import Email from "../super-admin/settings/Email";
import Emailtemp from "../super-admin/settings/Emailtemp";
import Sublist from "../super-admin/Sublist";

const AppRoutes = () => {
    return (
        <Routes >
            <Route exact path={AdminRouteNames.Admin} element={<AdminRoutes />}>
                <Route path={AdminRouteNames.Dashboard} element={<AdminDashboard/>} />
                <Route path={AdminRouteNames.SubscriptionAdd} element= {<Subscription /> } />
                <Route path={AdminRouteNames.SubscriptionList} element= {<SubscriptionList /> } />
                <Route path={AdminRouteNames.Settings} element= {<Settings /> } />
                <Route path={AdminRouteNames.Application} element= {<Application/>} />
                <Route path={AdminRouteNames.Email} element= {<Email/>} />
                <Route path={AdminRouteNames.Emailtemp} element= {<Emailtemp/>} />
                <Route path={AdminRouteNames.Sublist} element= {<Sublist /> } />
            </Route >
            <Route path={AdminRouteNames.ForgotPassword} element={<AdminForgotPassword />} />
            <Route path={AdminRouteNames.Login} element={<AdminLogin/>} />
        </Routes>
    )
}

export default AppRoutes