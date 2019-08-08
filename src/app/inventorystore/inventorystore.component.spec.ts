import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorystoreComponent } from './inventorystore.component';

describe('InventorystoreComponent', () => {
  let component: InventorystoreComponent;
  let fixture: ComponentFixture<InventorystoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventorystoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventorystoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
