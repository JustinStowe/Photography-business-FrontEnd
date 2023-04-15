import { useState } from "react";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import { AccountPage, HomePage, NewPhotoPage, ShowPhotoPage } from "./pages";
import { getUser } from "./utilities/user-service";
import { Header } from "./components";

import "./App.css";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <div className="App">
      <Header user={user} />
      <Routes>
        <Route path="/home" element={<HomePage user={user} />} />
        <Route path="/home/new" element={<NewPhotoPage user={user} />} />
        <Route path="/home/show/:id" element={<ShowPhotoPage user={user} />} />
        <Route
          path="/account"
          element={<AccountPage user={user} setUser={setUser} />}
        />
        {/* Catch-All Route */}
        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
    </div>
  );
}

export default App;
