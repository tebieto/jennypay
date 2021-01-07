// eslint-disable-next-line no-undef
export const validateForm = credentials => {
	const { password, email, name, phone, referal, confirm } = credentials;
	let errorObject = {};
	let errorMessage;
	if(typeof(email) == 'string' && !email.length) {
		errorMessage = 'Email field is required';
		errorObject.email= errorMessage;
	}
	if(typeof(name) == 'string' && !name.length) {
		errorMessage = 'Name field is required';
		errorObject.name= errorMessage;
	}
	if(typeof(phone) == 'string' && !phone.length) {
		errorMessage = 'Phone field is required';
		errorObject.phone= errorMessage;
	}
	if(typeof(referal) == 'string' && !referal.length) {
		errorMessage = 'Referal field is required';
		errorObject.referal= errorMessage;
	}
	if(typeof(password) == 'string' && !password.length) {
		errorMessage = 'Password field is required';
		errorObject.password= errorMessage;
	}
	if(typeof(password) == 'string' && typeof(confirm) == 'string' && password !== confirm) {
		errorMessage = 'Passwords and Password confirmation must match';
		errorObject.confirm= errorMessage;
	}

	return { errorObject, errorMessage };
};
const colors = {
	black: '#000000',
	lightgray: '#cdcdcf',
	red: 'red',
	green: 'green',
	transparent: 'transparent',
	darkseagreen: '#87c865',
	lightcoral: '#f1758b',
	blanchedalmond: '#f9f1ca',
	white: '#fff',
	whitesmoke: '#ededed',
	darkslateblue: '#3c5998',
	darkcyan: '#1877a9',
	darkslategray: '#2b424d',
	indianred: '#e6486d'
};

export const blackColor = colors.black;
export const lightgrayColor = colors.lightgray;
export const redColor = colors.red;
export const greenColor = colors.green;
export const transparentColor = colors.transparent;
export const primaryColor = colors.darkseagreen;
export const secondaryColor = colors.lightcoral;
export const tertiaryColor = colors.blanchedalmond;
export const whiteColor = colors.white;
export const whitesmokeColor = colors.whitesmoke;
export const facebookColor = colors.darkslateblue;
export const linkedInColor = colors.darkcyan;
export const githubColor = colors.darkslategray;
export const indianRedColor = colors.indianred;


export const defaultAvatar = `http://${window.location.host}/user.png`;