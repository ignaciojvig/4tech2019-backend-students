export class UserActivityCommentDto {

    constructor(userId: string, userName: string, comment: string) {
        this.userId = userId;
        this.userName = userName;
        this.comment = comment;
        this.timestamp = new Date();
    }

    readonly userId: string;
    readonly userName: string;
    readonly comment: string;
    readonly timestamp: Date;
}
