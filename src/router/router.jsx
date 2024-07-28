import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import UserDetailsForm from "../pages/UserDetails";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import AddressInformation from "../components/AddressInformation";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Login />} />
            <Route path="registration" element={<UserDetailsForm />} />
            <Route path="address" element={<AddressInformation />} />
            <Route path="dashboard" element={<Dashboard />} />
        </Route>
    )
);
