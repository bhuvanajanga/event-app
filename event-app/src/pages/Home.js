import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1 style={styles.title}>Event Management Website</h1>
        <p style={styles.subtitle}>
          Discover, register, and manage events effortlessly — all in one place.
        </p>

        <div style={styles.buttonGroup}>
          <button style={styles.primaryBtn} onClick={() => navigate("/events")}>
            View Events
          </button>
          <button style={styles.secondaryBtn} onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    color: "#fff",
    textAlign: "center",
    padding: "20px"
  },
  hero: {
    maxWidth: "600px"
  },
  title: {
    fontSize: "42px",
    marginBottom: "15px"
  },
  subtitle: {
    fontSize: "18px",
    marginBottom: "30px",
    opacity: 0.9
  },
  buttonGroup: {
    display: "flex",
    gap: "15px",
    justifyContent: "center"
  },
  primaryBtn: {
    padding: "12px 24px",
    fontSize: "16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    backgroundColor: "#ffffff",
    color: "#5a4fcf",
    fontWeight: "bold"
  },
  secondaryBtn: {
    padding: "12px 24px",
    fontSize: "16px",
    border: "2px solid #ffffff",
    borderRadius: "6px",
    cursor: "pointer",
    backgroundColor: "transparent",
    color: "#ffffff",
    fontWeight: "bold"
  }
};

export default Home;
