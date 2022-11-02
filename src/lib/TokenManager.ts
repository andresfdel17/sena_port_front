import { ITokenManager } from "@interfaces/lib";
import jwtDecode from "jwt-decode";

export class TokenManager implements ITokenManager {
    static decodeToken(token: string): any{
        try {
            let data = jwtDecode(token);
            return data;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}