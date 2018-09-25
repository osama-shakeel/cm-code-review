import { User } from "./user.model";
import { Commit } from "./commit.model";

export class PullRequest {
    id: number;
    num: number;
    state: string;
    title: string;
    user: User;
    created_at: string;
    updated_at: string;
    closed_at: string;
    merged_at: string;
    merge_commit_sha: string;

    head: Commit;
    base: Commit;

    constructor(id, num, title) {
        this.id = id;
        this.num = num;
        this.title = title;
    }
}