import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoclimaComponent } from './infoclima.component';

describe('InfoclimaComponent', () => {
  let component: InfoclimaComponent;
  let fixture: ComponentFixture<InfoclimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoclimaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoclimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
