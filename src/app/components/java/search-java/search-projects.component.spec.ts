import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchJavaComponent } from './search-java.component';

describe('SearchProjectsComponent', () => {
  let component: SearchJavaComponent;
  let fixture: ComponentFixture<SearchJavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchJavaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent( SearchJavaComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
