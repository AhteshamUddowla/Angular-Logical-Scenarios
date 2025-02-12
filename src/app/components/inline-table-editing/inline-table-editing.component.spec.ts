import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineTableEditingComponent } from './inline-table-editing.component';

describe('InlineTableEditingComponent', () => {
  let component: InlineTableEditingComponent;
  let fixture: ComponentFixture<InlineTableEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlineTableEditingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InlineTableEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
