import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphyDetailComponent } from './giphy-detail.component';

describe('GiphyDetailComponent', () => {
  let component: GiphyDetailComponent;
  let fixture: ComponentFixture<GiphyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiphyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
