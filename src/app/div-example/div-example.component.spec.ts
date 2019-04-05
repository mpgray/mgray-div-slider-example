import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivExampleComponent } from './div-example.component';

describe('DivExampleComponent', () => {
  let component: DivExampleComponent;
  let fixture: ComponentFixture<DivExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
