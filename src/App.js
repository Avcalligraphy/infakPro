import React, { useEffect, useState } from 'react'
import LandingPage from './pages/LandingPage'
import Login from './pages/Auth/Login'
import ScreenTransition from './components/ScreenTransition'
import Home from './pages/Home'
import Maps from './pages/Maps'
import Friends from './pages/Friends'
import Profile from './pages/Profile'
import Notifcations from './pages/Notifcations'
import PrayPage from './pages/PrayPage'
import SplashScreen from './pages/SplashScreen'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { auth, database } from './Database/Fire'
import { onAuthStateChanged } from 'firebase/auth'
import Register from './pages/Auth/Register'
import { onValue, ref } from 'firebase/database'
import AdminPage from './pages/Admin/AdminPage'
import Berita from './pages/News/Berita'
import ArticlePage from './pages/ArticlePage'

const App = () => {
  const [offlineStatus, setOfflineStatus] = useState(!navigator.onLine);
  const [loginTime, setLoginTime] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [dataUser, setDataUser] = useState();
  const uid = localStorage.getItem('uid');

  const starCountRef = ref(database, 'users/');
  const databaseUser = ref(database, `users/${uid}/`);

  function handleOfflineStatus() {
    setOfflineStatus(!navigator.onLine);
  }

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(
      auth,
      async (authenticatedUser) => {
        if (authenticatedUser) {
          setUser(authenticatedUser.email);
          setLoginTime(Date.now());
          setLoading(false);
        } else {
          setUser(null);
          setLoading(false);
        }
      }
    );

    return () => {
      unsubscribeAuth();
    };
  }, []);

  useEffect(() => {
    const fetchData = () => {
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        if (data !== null) {
          setData(data);
        }
      });
      onValue(databaseUser, (snapshot) => {
        const data = snapshot.val();
        if (data !== null) {
          setDataUser(data);
        }
      });
    };

    fetchData();
    handleOfflineStatus();
    window.addEventListener('online', handleOfflineStatus);
    window.addEventListener('offline', handleOfflineStatus);

    return () => {
      const starCountListener = onValue(starCountRef, () => {});
      const databaseUserListener = onValue(databaseUser, () => {});
      starCountListener();
      databaseUserListener();
      window.removeEventListener('online', handleOfflineStatus);
      window.removeEventListener('offline', handleOfflineStatus);
    };
  }, [uid]);
  return (
    <BrowserRouter>
  
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/article"
              element={
                <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
                  <ArticlePage />
                </PrivateRoute>
              }
            />
            <Route
              path="/berita"
              element={
                <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
                  <Berita />
                </PrivateRoute>
              }
            />
            <Route
              path="/landing-page"
              element={
                <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
                  <LandingPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/login"
              element={
                <Private isAuthenticated={user} userRole={dataUser?.role}>
                  <Login />
                </Private>
              }
            />
            <Route
              path="/register"
              element={
                <Private isAuthenticated={user} userRole={dataUser?.role}>
                  <Register />
                </Private>
              }
            />
            <Route
              path="/maps"
              element={
                <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
                  <Maps />
                </PrivateRoute>
              }
            />
            <Route
              path="/add-friends"
              element={
                <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
                  <Friends data={data} />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
                  <Profile dataUser={dataUser} />
                </PrivateRoute>
              }
            />
            <Route
              path="/notification"
              element={
                <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
                  <Notifcations />
                </PrivateRoute>
              }
            />
            <Route
              path="/pray"
              element={
                <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
                  <PrayPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/dashboard"
              element={
                <PrivateRouteAdmin
                  isAuthenticated={user}
                  userRole={dataUser?.role}
                >
                  <AdminPage />
                </PrivateRouteAdmin>
              }
            />
          </Routes>
    </BrowserRouter>
  );
}

export default App
const PrivateRoute = ({ children, isAuthenticated, userRole }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  if (isAuthenticated && userRole === "admin") {
    return <Navigate to="/admin/dashboard" />;
  }

  return children;
};
const PrivateRouteAdmin = ({ children, isAuthenticated, userRole }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  if (isAuthenticated && userRole === "user") {
    return <Navigate to="/" />;
  }

  return children;
};
const Private = ({ children, isAuthenticated, userRole }) => {
  if (isAuthenticated && userRole === "user") {
    return <Navigate to="/" />;
  }
  if (isAuthenticated && userRole === "admin") {
    return <Navigate to="/admin/dashboard" />;
  }

  return children;
};
