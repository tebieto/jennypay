import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { HomeContainer } from './home.styles';
import ThankYou from '../../assets/thank-you.svg';
import CustomButton from '../../components/custom-button/custom-button.component';
import { signOutStart } from '../../redux/user/user.action';
import Logo from '../../components/logo/logo.component';

const Home = ({ currentUser, signOutStart }) => {
	const { displayName, phone, email, referal } = currentUser;
	return (
		<HomeContainer>
			<div className="content elevate">
				<div className="left">
					<img src={ThankYou} alt=""/>
				</div>
				<div className="right">
					<Logo />
					<h3>Profile saved, JennyPay is launching in April 4th, 2020</h3>
					<div>{`Name: ${displayName}`}</div>
					<div>{`Email: ${email}`}</div>
					<div>{`Phone number: ${phone}`}</div>
					<div>{`Refered by: ${referal}`}</div>
					<CustomButton onClick={signOutStart}>Back to Login</CustomButton>
				</div>
			</div>
		</HomeContainer>
	);
};

Home.propTypes = {
	currentUser: PropTypes.object,
	signOutStart: PropTypes.func
};

const mapStateToProps = () => createStructuredSelector({
	currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
	signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);