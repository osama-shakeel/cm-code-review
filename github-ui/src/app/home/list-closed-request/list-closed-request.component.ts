import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { PullRequest } from '../../common/model/pull-request.model';
import { PullRequestService } from '../pull-request.service';

@Component({
  selector: 'app-list-closed-request',
  templateUrl: './list-closed-request.component.html',
  styleUrls: ['./list-closed-request.component.css']
})
export class ListClosedRequestComponent implements OnInit {
  private openRequestSubscription: Subscription;
  private mergeRequestSubscription: Subscription;

  private pullRequests: PullRequest[];
  private displayRequests: boolean = false;

  constructor(private pullRequestService: PullRequestService) { 

    this.openRequestSubscription = this.pullRequestService.subscribeToOpenRequest().subscribe(
      () => {
        this.reset();
      }
    )

    this.mergeRequestSubscription = this.pullRequestService.subscribeToDisplayMergeRequest().subscribe(
      () => {
        this.reset();
      }
    )
  }

  ngOnInit() {
  }

  reset() {
    this.pullRequests = [];
    this.displayRequests = false;
  }

  loadClosedRequests() {
    this.reset();
    this.pullRequestService.triggerClosedRequest();

    // Load Closed Requests
    this.pullRequestService.getAllClosedRequests().subscribe(
      (items : any) => {
        this.displayRequests = true;
        this.pullRequests = items.map(
          (item) => {
            return new PullRequest(item.id, item.number, item.title);
          }
        )
      }
    );
    
  }
}
