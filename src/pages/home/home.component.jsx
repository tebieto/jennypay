import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { HomeContainer } from './home.styles';

const Home = ({ currentUser }) => {
	const { displayName, phone, email } = currentUser;
	return (
		<HomeContainer>
			<div>{email}</div>
			<div>{displayName}</div>
			<div>{phone}</div>
		</HomeContainer>
	);
};

Home.propTypes = {
	currentUser: PropTypes.object
};

const mapStateToProps = () => createStructuredSelector({
	currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(Home);