export type UserIdResponse = { userId: string };
export type MessageResponse = { message: string };
export interface AuthResponse {
	accessToken: string;
	refreshToken: string;
}
