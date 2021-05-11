import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbedQryComponent } from './embed-qry.component';

describe('EmbedQryComponent', () => {
  let component: EmbedQryComponent;
  let fixture: ComponentFixture<EmbedQryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbedQryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbedQryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
