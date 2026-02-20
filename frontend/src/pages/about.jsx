import aboutBg from "../assets/about.jpg";

export default function About() {
  return (
    <div
      className="page about-page"
      style={{
        backgroundImage: `url(${aboutBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh"
      }}
    >
      <div className="about-overlay">
        <h1>About Us</h1>
        <p>We are professional football club.</p>
      </div>
    </div>
  );
}