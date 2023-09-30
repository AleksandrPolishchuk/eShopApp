import Meta from "src/core/components/Meta";
import Navbar from "src/core/components/Navbar";

export default function AppLayout({ children }) {
  return (
    <>
      <Meta />
      <Navbar />
      {children}
    </>
  );
}
