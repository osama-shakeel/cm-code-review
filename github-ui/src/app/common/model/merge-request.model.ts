export class MergeRequest {
    num: number;
    commit_title: string;
    commit_message: string;
    sha: string;
    merge_method: string = 'merge';

    constructor(num, title, message, sha) {
        this.num = num;
        this.commit_title = title;
        this.commit_message = message;
        this.sha = sha;
    }
}