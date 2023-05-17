import { Routes, Route, Navigate, useParams } from "react-router-dom";

import {
  AccountPage,
  HomePage,
  NewPhotoPage,
  ShowPhotoPage,
  PublicHomePage,
  ContactPage,
  AdminPage,
} from "./pages";

import { Header } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home/public" element={<PublicHomePage />} />
        <Route path="/home/user" element={<HomePage />} />
        <Route path="/home/user/new" element={<NewPhotoPage />} />
        <Route path="/home/show/:id" element={<ShowPhotoPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/home/admin" element={<AdminPage />} />
        {/* Catch-All Route */}
        <Route path="/*" element={<Navigate to="/home/public" />} />
      </Routes>
    </div>
  );
}

export default App;
