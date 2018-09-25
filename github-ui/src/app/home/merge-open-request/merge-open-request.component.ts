import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { PullRequest } from '../../common/model/pull-request.model';
import { PullRequestService } from '../pull-request.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MergeRequest } from '../../common/model/merge-request.model';

@Component({
  selector: 'app-merge-open-request',
  templateUrl: './merge-open-request.component.html',
  styleUrls: ['./merge-open-request.component.css']
})
export class MergeOpenRequestComponent implements OnInit {
  private openRequestSubscription: Subscription;
  private closedRequestSubscription: Subscription;

  mergeRequestForm: FormGroup;
  private displayForm: boolean = false;
  private successMessage: String = '';

  constructor(
    private pullRequestService: PullRequestService,
    private formBuilder: FormBuilder) {

      this.createForm();

      this.openRequestSubscription = this.pullRequestService.subscribeToOpenRequest().subscribe(
      () => {
        this.reset();
      }
    );

    this.closedRequestSubscription = this.pullRequestService.subscribeToClosedRequest().subscribe(
      () => {
        this.reset();
      }
    );
  }

  ngOnInit() {
  }

  private createForm() {
    this.mergeRequestForm = this.formBuilder.group({
      num: ['', Validators.required],
      commit_title: ['', Validators.required],
      commit_message: [''],
      sha: ['', Validators.required]
    });
  }

  getValue(field): string {
    let val: string = this.mergeRequestForm.get(field).value;
    if (val) {
      return val.trim();
    }
    return '';
  }

  reset() {
    this.displayForm = false;
    this.successMessage = '';
  }

  displayMergeRequestForm() {
    this.pullRequestService.triggerDisplayMergeRequest();
    this.displayForm = true;
  }

  submitMergeForm() {
    if (this.mergeRequestForm.valid) {
      // Send merge request
      let mergeRequest: MergeRequest =
        new MergeRequest(
          this.getValue('num'),
          this.getValue('commit_title'),
          this.getValue('commit_message'),
          this.getValue('sha')
        );
      this.pullRequestService.mergeOpenRequest(mergeRequest).subscribe(
        (success) => {
          this.successMessage = 'Merged'
        },
        (error) => {
          this.successMessage = 'Merge failed'
        }
      );
    }    
  }
}
