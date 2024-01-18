import { TOTP, Secret } from 'otpauth';
import { TOTP_KEY } from '$env/static/private';

const totp = new TOTP({
	algorithm: 'SHA1',
	digits: 6,
	period: 30,
	secret: Secret.fromBase32(TOTP_KEY.replace(/ /g, ''))
});

export function getTotp(): string {
	return totp.generate();
}
