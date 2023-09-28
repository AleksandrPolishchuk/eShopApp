import Navbar from "src/core/components/Navbar";

export default function AppLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
