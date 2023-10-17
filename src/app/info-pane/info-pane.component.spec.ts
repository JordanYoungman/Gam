import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPaneComponent } from './info-pane.component';

describe('InfoPaneComponent', () => {
  let component: InfoPaneComponent;
  let fixture: ComponentFixture<InfoPaneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoPaneComponent]
    });
    fixture = TestBed.createComponent(InfoPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
