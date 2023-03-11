export interface LoginResponse {
    success: boolean;
    accessToken: string;
    refreshToken: string;
    user: {email: string, name: string}
}
