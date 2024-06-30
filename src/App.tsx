import React from "react";
import "./App.css";
import HomePage from "./views/HomePage";
import { Route, Routes } from "react-router-dom";
import Cancellation from "./views/Cancellation";
import LodgingDetails from "./views/LodgingDetails";
import LodgingList from "./views/LodgingList";
import LodgingLocation from "./views/LodgingLocation";
import ReservationComplete from "./views/ReservationComplete";
import ReservationList from "./views/ReservationList";
import ReservationPage from "./views/ReservationPage";
import ReviewEdit from "./views/ReviewEdit";
import ReviewPage from "./views/ReviewPage";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import UsageDetails from "./views/UsageDetails";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import Header from "./components/Header";
import MenuBarReservation from "./components/MenuBarReservation";
import MenuBarInformation from "./components/MenuBarInformation";

import NavigationBar from "./components/NavigationBar";

export default function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/logo" element={<Logo />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/header" element={<Header />} />
        <Route path="/menuReservation" element={<MenuBarReservation />} />
        <Route path="/menuInformation" element={<MenuBarInformation />} />

        
        <Route path="/cancellation" element={<Cancellation />} />
        <Route path="/hompage" element={<HomePage />} />
        <Route path="/lodgingdetails" element={<LodgingDetails />} />
        <Route path="/lodginglist" element={<LodgingList />} />
        <Route path="/lodginglocation" element={<LodgingLocation />} />
        <Route path="/reservationcomplete" element={<ReservationComplete />} />
        <Route path="/reservationlist" element={<ReservationList />} />
        <Route path="/reservationpage" element={<ReservationPage />} />
        <Route path="/reviewedit" element={<ReviewEdit />} />
        <Route path="/reviewpage" element={<ReviewPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/usagedetails" element={<UsageDetails />} />
      </Routes>
    </>
  );
}
