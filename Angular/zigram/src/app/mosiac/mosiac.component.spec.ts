import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MosiacComponent } from './mosiac.component';

describe('MosiacComponent', () => {
  let component: MosiacComponent;
  let fixture: ComponentFixture<MosiacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MosiacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MosiacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
