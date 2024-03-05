import { SvelteKitAuth } from '@auth/sveltekit';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '$env/static/private';
import google from '@auth/sveltekit/providers/google';

export const { handle, signIn, signOut } = SvelteKitAuth({
	providers: [
		google({ clientId: GOOGLE_CLIENT_ID, clientSecret: GOOGLE_CLIENT_SECRET }),
	],
});