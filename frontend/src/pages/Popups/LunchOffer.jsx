import React, { useEffect, useState } from 'react';

const MittagsangebotPopup = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Optional: Auto-close after X seconds
    const timer = setTimeout(() => setIsVisible(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <h2 style={styles.title}>Mittagsangebot</h2>
          <p style={styles.text}>
            Zwischen <strong>11:00 Uhr</strong> und <strong>14:00 Uhr</strong><br />
            erhalten Sie alle<br />
            <strong style={{ color: 'var(--primary)' }}>vegetarischen</strong> und <strong style={{ color: 'var(--primary)' }}>Chicken-Gerichte</strong><br />
            für nur<br /> <br />
            <strong style={{ fontSize: '1.4rem', color: 'var(--primary)' }}>9,90 €</strong>
          </p>

        <button style={styles.button} onClick={() => setIsVisible(false)}>
          Schließen
        </button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  popup: {
    backgroundColor: 'var(--bg)',
    color: 'var(--body)',
    padding: '2rem',
    borderRadius: '16px',
    maxWidth: '90%',
    width: '400px',
    boxShadow: '0 0 20px rgba(0,0,0,0.2)',
    textAlign: 'center',
  },
  title: {
    color: 'var(--primary)',
    marginBottom: '1rem',
    fontSize: '1.5rem',
  },
  text: {
    marginBottom: '1.5rem',
    fontSize: '1rem',
    lineHeight: '1.4',
  },
  button: {
    backgroundColor: 'var(--primary)',
    color: '#fff',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
};

export default MittagsangebotPopup;
