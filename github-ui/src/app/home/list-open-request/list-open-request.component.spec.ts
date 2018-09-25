import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOpenRequestComponent } from './list-open-request.component';

describe('ListOpenRequestComponent', () => {
  let component: ListOpenRequestComponent;
  let fixture: ComponentFixture<ListOpenRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOpenRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOpenRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
