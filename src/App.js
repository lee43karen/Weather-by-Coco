import { Container } from "@mui/material";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="min-h-screen h-full bg-gradient-to-b from-sky-200 to-indigo-200 py-16">
      <main >
        <Container>
          <Home />
        </Container>
      </main>
    </div>
  );
}