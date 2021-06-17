import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyQuestionDetailsComponent } from './my-question-details.component';

describe('MyQuestionDetailsComponent', () => {
  let component: MyQuestionDetailsComponent;
  let fixture: ComponentFixture<MyQuestionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyQuestionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyQuestionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
