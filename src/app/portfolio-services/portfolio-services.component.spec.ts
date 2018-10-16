import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioServicesComponent } from './portfolio-services.component';

describe('PortfolioServicesComponent', () => {
  let component: PortfolioServicesComponent;
  let fixture: ComponentFixture<PortfolioServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
