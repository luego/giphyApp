import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphyHomeComponent } from './giphy-home.component';

describe('GiphyHomeComponent', () => {
  let component: GiphyHomeComponent;
  let fixture: ComponentFixture<GiphyHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiphyHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
