import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Switch, Route, Redirect } from 'react-router-dom';
import Register from './pages/register/register.component';
import Login from './pages/login/login.component';
import Home from './pages/home/home.component';
import { selectCurrentUser } from './redux/user/user.selector';

function App({ currentUser }) {

	return (
		<div className="App">
			<Switch>
				<Suspense fallback={<div>Loading...</div>}>
					<Route  path={'/'} exact={true}  render={currentUser ? <Home /> : <Redirect to="/login"/>} />
					<Route  path={'/register'} exact={true} render={currentUser ? <Redirect to="/"/> : <Register />} />
					<Route  path={'/login'} exact={true}  render={currentUser ? <Redirect to="/"/> : <Login />  } />
				</Suspense>
			</Switch>
		</div>
	);
}
App.propTypes = {
	currentUser: PropTypes.object
};

const mapStateToProps = () => createStructuredSelector({
	currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(App);
