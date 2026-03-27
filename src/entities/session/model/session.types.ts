export interface User {
	id: string;
	email: string;
	firstName: string;
	lastName: string;
	confirmed: boolean;
	photo: string | null;
	createdAt: string;
	updatedAt: string;
}

export interface SessionSchema {
	user: User | null;
	isAuthenticated: boolean;
	isLoading: boolean;
}
