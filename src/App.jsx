import { Routes, Route, Navigate, useParams } from "react-router-dom";
import { PrivateRoute } from "./components";
import {
  AccountPage,
  HomePage,
  NewPhotoPage,
  ShowPhotoPage,
  PublicHomePage,
} from "./pages";

import { Header } from "./components";
import { usePhotoStore } from "./stores/usePhotoStore";
import "./App.css";

function App() {
  const { user, setUser } = usePhotoStore;

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home/public" element={<PublicHomePage />} />
        <Route path="/home/user" element={<HomePage />} />
        <Route path="/home/user/new" element={<NewPhotoPage />} />
        <Route path="/home/show/:id" element={<ShowPhotoPage />} />
        <Route path="/account" element={<AccountPage user={user} />} />
        {/* Catch-All Route */}
        {/* <Route path="/*" element={<Navigate to="/home/public" />} /> */}
      </Routes>
    </div>
  );
}

export default App;
