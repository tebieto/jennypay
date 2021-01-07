import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from './pages/register/register.component';
import Login from './pages/login/login.component';
import Home from './pages/home/home.component';

function App() {

	return (
		<div className="App">
			<Switch>
				<Suspense fallback={<div>Loading...</div>}>
					<Route  path={'/register'} exact={true}  component={Register} />
          <Route  path={'/login'} exact={true}  component={Login} />
					<Route  path={'/home'} exact={true}  component={Home} />
				</Suspense>
			</Switch>
		</div>
	);
}

export default App;
