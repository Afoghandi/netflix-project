import React from 'react';

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home, Signin, Browse, Signup } from './pages';

import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';

function App() {
	const user = null;
	return (
		<>
			<Router>
				<Switch>
					<IsUserRedirect
						user={user}
						loggedInPath={ROUTES.BROWSE}
						path={ROUTES.SIGN_IN}
						exact
					>
						<Signin />
					</IsUserRedirect>

					<IsUserRedirect
						user={user}
						loggedInPath={ROUTES.BROWSE}
						path={ROUTES.SIGN_UP}
						exact
					>
						<Signup />
					</IsUserRedirect>

					<ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
						<Browse />
					</ProtectedRoute>
					<IsUserRedirect
						user={user}
						loggedInPath={ROUTES.BROWSE}
						path={ROUTES.HOME}
					>
						<Home />
					</IsUserRedirect>
				</Switch>
			</Router>{' '}
		</>
	);
}

export default App;
