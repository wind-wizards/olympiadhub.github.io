import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePapersComponent } from './manage-papers.component';

describe('ManagePapersComponent', () => {
  let component: ManagePapersComponent;
  let fixture: ComponentFixture<ManagePapersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagePapersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
