import AppRoutes from "./routes/AppRoutes";
import AuthProvider from "./common/providers/AuthProvider";

function App() {

  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
