import { Injectable } from '@nestjs/common';

@Injectable()
export class UserActivityService {

    uploadImage(userId: string, filename: string, description: string) {
        return 'Upload';
    }

}
