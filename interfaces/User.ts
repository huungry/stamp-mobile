export enum UserRole {
    Basic = "Basic",
    Pro = "Pro"
}

export interface UserView {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    nickName: string;
    role: UserRole;
    createdAt: Date;
    blockedAt?: Date;
    archivedAt?: Date;
}