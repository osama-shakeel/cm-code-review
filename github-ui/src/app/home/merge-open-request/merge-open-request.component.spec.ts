import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeOpenRequestComponent } from './merge-open-request.component';

describe('MergeOpenRequestComponent', () => {
  let component: MergeOpenRequestComponent;
  let fixture: ComponentFixture<MergeOpenRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergeOpenRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeOpenRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
