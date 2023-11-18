import Image from "next/image";
import Link from "next/link";
import confetti from "../../public/assets/confetti.png";

export default function SuccessPage() {
  // Test
  return (
    <div className="section bg-pink h-screen">
      <div className="container">
        <div className="section-intro welcome">
          <Image
            src={confetti}
            height={200}
            width={200}
            alt="confetti"
            className="confetti"
          />
          <h1>Success!</h1>
          <p>Access granted</p>
          <Link href="/login" className="large-button">
            <div className="large-button-text">Go to Login</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
