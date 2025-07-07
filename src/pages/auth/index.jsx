import React from 'react';
import { auth, provider } from '../../config/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './index.css'; // Make sure this CSS file exists

function Index() {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      const results = await signInWithPopup(auth, provider);
      console.log(results);

      const authInfo = {
        userID: results.user.uid,
        name: results.user.displayName,
        profilePhoto: results.user.photoURL,
        isAuth: true,
      };

      localStorage.setItem('auth', JSON.stringify(authInfo));
      navigate('/expense-tracker');
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>💰 Expense Tracker</h1>
        <p className="subtitle">Sign in with Google to continue</p>
        <button className="google-btn" onClick={signInWithGoogle}>
          Sign in with Google
        </button>
      </div>
      <footer className="footer">Built with ❤️ by Gagan</footer>
    </div>
  );
}

export default Index;
