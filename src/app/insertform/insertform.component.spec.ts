import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertformComponent } from './insertform.component';

describe('InsertformComponent', () => {
  let component: InsertformComponent;
  let fixture: ComponentFixture<InsertformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
