import React, { useContext, useState, useEffect } from 'react';
import { SelectProfileContainer } from './profiles';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';
import { Loading, Header } from '../components';
import logo from '../logo.svg';

export function BrowseContainer({ slides }) {
	const [profile, setProfile] = useState({});

	const [loading, setLoading] = useState(true);
	const { firebase } = useContext(FirebaseContext);

	const user = firebase.auth().currentUser || {};

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, [profile.displayName]);

	return profile.displayName ? (
		<>
			{loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
			<Header src='joker1' dontShowOnSmallViewPort>
				<Header.Frame>
					<Header.Group>
						<Header.Logo to={ROUTES.HOME} src={logo} alt='Netflix' />
						<Header.TextLink>Series</Header.TextLink>
						<Header.TextLink>Films</Header.TextLink>
					</Header.Group>

					<Header.Group>
						<Header.Profile>
							<Header.Picture src={user.photoURL} />
							<Header.Dropdown>
								<Header.Group>
									<Header.Picture src={user.photoURL} />
									<Header.TextLink>{user.displayName} </Header.TextLink>
								</Header.Group>
							</Header.Dropdown>
						</Header.Profile>
					</Header.Group>
				</Header.Frame>
				<Header.Feature>
					<Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
					<Header.Text>
						The Virgin Money current account pays 2.02% on the first £1,000 in
						your account. There's no minimum pay-in required to get the
						interest, so it's good if you've low or unstable income. You also
						get fee-free spending and cash withdrawals overseas, so if you
						travel a lot, that's an added boon.
					</Header.Text>
				</Header.Feature>
			</Header>
		</>
	) : (
		<SelectProfileContainer user={user} setProfile={setProfile} />
	);
}
