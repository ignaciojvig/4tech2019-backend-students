import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { UserActivityCommentDto } from '../dto/user-activity-comment.dto';

export interface UserActivity extends Document {
    readonly _id: mongoose.Schema.Types.ObjectId;
    readonly userId: string;
    readonly userName: string;
    readonly fileName: string;
    readonly timestamp: Date;
    likes: string[];
    comments: UserActivityCommentDto[];
}

const UserActivityCommentsSchema = new mongoose.Schema({
    userId: String,
    userName: String,
    comment: String,
    timestamp: {
        type: Date,
        default: Date.now(),
    },
});

export const UserActivitySchema = new mongoose.Schema({
    userId: String,
    userName: String,
    fileName: String,
    likes: [String],
    timestamp: {
        type: Date,
        default: Date.now(),
    },
    comments: [UserActivityCommentsSchema],
});
