import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmModalComponent } from './cm-modal.component';

describe('CmModalComponent', () => {
  let component: CmModalComponent;
  let fixture: ComponentFixture<CmModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
