import { Component, OnInit } from '@angular/core';
import { PullRequestService } from '../pull-request.service';
import { Subscription } from 'rxjs/Subscription';
import { PullRequest } from '../../common/model/pull-request.model';

@Component({
  selector: 'app-list-open-request',
  templateUrl: './list-open-request.component.html',
  styleUrls: ['./list-open-request.component.css']
})
export class ListOpenRequestComponent implements OnInit {
  private closeRequestSubscription: Subscription;
  private mergeRequestSubscription: Subscription;

  private pullRequests: PullRequest[];
  private displayRequests: boolean = false;

  constructor(private pullRequestService: PullRequestService) { 

    this.closeRequestSubscription = this.pullRequestService.subscribeToClosedRequest().subscribe(
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

  loadOpenRequests() {
    this.reset();
    this.pullRequestService.triggerOpenRequest();

    // Load Open Requests
    this.pullRequestService.getAllOpenRequests().subscribe(
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
