import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './screens/Login';
import Feed from './screens/Feed';
import Challenges from './screens/Challenges';
import ChallengeDetail from './screens/ChallengeDetail';
import Ranking from './screens/Ranking';
import Profile from './screens/Profile';
import ChallengeSubmissions from './screens/ChallengeSubmissions';
import Solution from './screens/Solution';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/challenges/detail/:id" element={<ChallengeDetail />} />
        <Route path="/challenges/submissions" element={<ChallengeSubmissions />} />
        <Route path="/challenges/solution/:id" element={<Solution />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;