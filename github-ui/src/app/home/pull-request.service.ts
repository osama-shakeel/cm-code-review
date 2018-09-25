import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { HttpClientService } from '../common/services/http-client.service';
import { Observable } from 'rxjs/Observable';
import { PullRequest } from '../common/model/pull-request.model';
import { MergeRequest } from '../common/model/merge-request.model';

@Injectable()
export class PullRequestService {
  private openRequestSubject: Subject<PullRequest> = new Subject<PullRequest>();
  private closedRequestSubject: Subject<PullRequest> = new Subject<PullRequest>();
  private mergeRequestSubject: Subject<PullRequest> = new Subject<PullRequest>();

  constructor(private http: HttpClientService) { }

  subscribeToOpenRequest(): Observable<PullRequest> {
    return this.openRequestSubject.asObservable();
  }

  triggerOpenRequest() {
    this.openRequestSubject.next();
  }

  subscribeToClosedRequest(): Observable<PullRequest> {
    return this.closedRequestSubject.asObservable();
  }

  triggerClosedRequest() {
    this.closedRequestSubject.next();
  }

  subscribeToDisplayMergeRequest(): Observable<PullRequest> {
    return this.mergeRequestSubject.asObservable();
  }

  triggerDisplayMergeRequest() {
    this.mergeRequestSubject.next();
  }

  getAllOpenRequests(): Observable<any> {
    return this.http.get("http://api.github.com/repos/osama-shakeel/algos/pulls?state=open");
  }

  getAllClosedRequests(): Observable<any> {
    return this.http.get("http://api.github.com/repos/osama-shakeel/algos/pulls?state=closed");
  }

  mergeOpenRequest(mergeRequest: MergeRequest): Observable<any> {
    return this.http.post(
      'http://api.github.com/repos/osama-shakeel/algos/pulls/' + mergeRequest.num + '/merge', 
      mergeRequest);
  }

}
