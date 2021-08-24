import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import SuspenseLoading from '../../components/Loading/SuspenseLoading';

const AdminRoutes = lazy(() => import('./AdminRoutes'));
const AuthRoutes = lazy(() => import('./AuthRoutes'));

const Alert = lazy(() => import('../Alert/Alert'));
const Landing = lazy(() => import('../../components/Landing/Landing'));
const CreateAccount = lazy(() => import('../Register/CreateAccount'));
const Verification = lazy(() => import('../Verification/Verification'));
const Login = lazy(() => import('../Login/Login'));
const CreateProfile = lazy(() => import('../CreateProfile/CreateProfile'));
const UpdateProfile = lazy(() => import('../CreateProfile/UpdateProfile'));
const UpdateAccount = lazy(() => import('../Register/UpdateAccount'));
const UploadAvatar = lazy(() => import('../AvatarForm/UploadAvatar'));
const UpdateAvatar = lazy(() => import('../AvatarForm/UpdateAvatar'));
const CreateMatch = lazy(() => import('../CreateMatch/CreateMatch'));
const UpdateMatch = lazy(() => import('../CreateMatch/UpdateMatch'));
const Profile = lazy(() => import('../Profile/Profile'));
const Wallet = lazy(() => import('../Wallet/Wallet'));
const Matches = lazy(() => import('../Matches/Matches'));
const MyMatches = lazy(() => import('../Matches/MyMatches'));
const Requests = lazy(() => import('../Payouts/Requests'));
const Feedbacks = lazy(() => import('../Feedbacks/Feedbacks'));
const SingleMatch = lazy(() => import('../SingleMatch/SingleMatch'));

const ContactUs = lazy(() => import('../../components/Contact/ContactUs'));
const AboutUs = lazy(() => import('../../components/About/AboutUs'));
const Feedback = lazy(() => import('../../components/Feedback/Feedback'));
const Payments = lazy(() => import('../../components/Payments/Payments'));
const HowToPlay = lazy(() => import('../../components/HowToPlay/HowToPlay'));
const AllFaqs = lazy(() => import('../../components/AllFaqs/AllFaqs'));
const Refund = lazy(() => import('../../components/Refund/Refund'));
const TermsOfUse = lazy(() => import('../../components/TermsOfUse/TermsOfUse'));
const Privacy = lazy(() => import('../../components/Privacy/Privacy'));

const WrongRoute = lazy(() => import('../../components/WrongRoute/WrongRoute'));

const Routes = () => {
  return (
    <>
      <Header />

      <Suspense fallback={<SuspenseLoading />}>
        <Alert />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/register" exact component={CreateAccount} />
          <Route path="/verify-otp" component={Verification} />
          <Route path="/login" exact component={Login} />
          <AuthRoutes
            path="/create-dashboard"
            exact
            component={CreateProfile}
          />
          <AuthRoutes path="/upload-avatar" exact component={UploadAvatar} />
          <AuthRoutes path="/update-avatar" exact component={UpdateAvatar} />
          <AuthRoutes path="/dashboard" exact component={Profile} />
          <AuthRoutes path="/wallet" exact component={Wallet} />
          <AuthRoutes path="/edit-dashboard" exact component={UpdateProfile} />
          <AuthRoutes path="/edit-account" exact component={UpdateAccount} />
          <AdminRoutes path="/host-tournament" exact component={CreateMatch} />
          <AdminRoutes
            path="/edit-tournament/:tournamentId"
            exact
            component={UpdateMatch}
          />
          <AdminRoutes path="/payout-requests" exact component={Requests} />
          <AdminRoutes path="/users-feedback" exact component={Feedbacks} />
          <AuthRoutes path="/tournaments" exact component={Matches} />
          <AuthRoutes path="/my-tournaments" exact component={MyMatches} />
          <AuthRoutes
            path="/tournaments/:tournamentId"
            exact
            component={SingleMatch}
          />

          <Route path="/about/contact-us" exact component={ContactUs} />
          <Route path="/about/about-us" exact component={AboutUs} />
          <Route path="/about/feedback" exact component={Feedback} />
          <Route path="/help/payments" exact component={Payments} />
          <Route path="/help/how-to-play" exact component={HowToPlay} />
          <Route path="/help/faqs" exact component={AllFaqs} />
          <Route path="/policy/refund-policy" exact component={Refund} />
          <Route path="/policy/terms-of-use" exact component={TermsOfUse} />
          <Route path="/policy/privacy" exact component={Privacy} />

          <Route component={WrongRoute} />
        </Switch>
      </Suspense>

      <Footer />
    </>
  );
};

export default Routes;
