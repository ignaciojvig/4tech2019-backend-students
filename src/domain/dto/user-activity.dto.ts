import { UserActivityCommentDto } from './user-activity-comment.dto';

export class UserActivityDto {
    constructor(userId: string, fileName: string, userName: string) {
        this.userId = userId;
        this.fileName = fileName;
        this.userName = userName;
        this.timestamp = new Date();
        this.likes = [];
        this.comments = [];
    }

    readonly userId: string;
    readonly fileName: string;
    readonly userName: string;
    readonly timestamp: Date;
    readonly likes: string[];
    readonly comments: UserActivityCommentDto[];
}
