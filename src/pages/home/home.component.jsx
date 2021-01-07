import React from 'react';
import { useQuery } from '@apollo/client';

import { CURRENT_USER } from '../../graphql/users/users.query';
import { HomeContainer } from './home.styles';

const Home = () => {
	const { loading, error, data } = useQuery(CURRENT_USER);
	console.log({ loading, error, data });
	return (
		<HomeContainer>
		</HomeContainer>
	);
};

export default Home;