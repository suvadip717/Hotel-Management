import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/common/Navbar.jsx";
import HomePage from "./components/home/HomePage.jsx";
import Footer from "./components/common/Footer.jsx";
import AllRoomsPage from "./components/booking_rooms/AllRoomsPage.jsx";
import FindBookingPage from "./components/booking_rooms/FindBookingPage.jsx";
import LoginPage from "./components/auth/LoginPage.jsx";
import RegisterPage from "./components/auth/RegisterPage.jsx";
import RoomDetailsPage from "./components/booking_rooms/RoomDetailsPage.jsx";
import ProfilePage from "./components/profile/ProfilePage.jsx";
import EditProfilePage from "./components/profile/EditProfilePage.jsx";
import AdminPage from "./components/admin/AdminPage.jsx";
import { ProtectedRoute, AdminRoute } from "./service/guard.jsx";
import ManageRoomPage from "./components/admin/ManageRoomPage.jsx";
import AddRoomPage from "./components/admin/AddRoomPage.jsx";
import EditRoomPage from "./components/admin/EditRoomPage.jsx";
import ManageBookingPage from "./components/admin/ManageBookingPage.jsx";
import EditBookingPage from "./components/admin/EditBookingPage.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              {/* Public Routes */}
              <Route exact path="/home" element={<HomePage />} />
              <Route exact path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/rooms" element={<AllRoomsPage />} />
              <Route path="/find-booking" element={<FindBookingPage />} />

              {/* Protected Routes */}
              <Route
                path="/room-details-book/:roomId"
                element={<ProtectedRoute component={RoomDetailsPage} />}
              />
              <Route
                path="/profile"
                element={<ProtectedRoute component={ProfilePage} />}
              />
              <Route
                path="/edit-profile"
                element={<ProtectedRoute component={EditProfilePage} />}
              />

              {/* Admin Routes */}
              <Route
                path="/admin"
                element={<AdminRoute component={AdminPage} />}
              />
              <Route
                path="/admin/manage-rooms"
                element={<AdminRoute component={ManageRoomPage} />}
              />
              <Route
                path="/admin/edit-room/:roomId"
                element={<AdminRoute component={EditRoomPage} />}
              />
              <Route
                path="/admin/add-room"
                element={<AdminRoute component={AddRoomPage} />}
              />
              <Route
                path="/admin/manage-bookings"
                element={<AdminRoute component={ManageBookingPage} />}
              />
              <Route
                path="/admin/edit-booking/:bookingCode"
                element={<AdminRoute component={EditBookingPage} />}
              />

              {/* Fallback Route */}
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
