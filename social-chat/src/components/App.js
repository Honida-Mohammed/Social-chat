import { Outlet } from "react-router-dom";

import { AuthProvider } from "../context/AuthContext";

function App() {
  return (
    <div style={{ fontFamily: "Avenir" }}>
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    </div>
  );
}

export default App;
