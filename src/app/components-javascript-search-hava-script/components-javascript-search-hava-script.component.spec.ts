import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsJavascriptSearchHavaScriptComponent } from './components-javascript-search-hava-script.component';

describe('ComponentsJavascriptSearchHavaScriptComponent', () => {
  let component: ComponentsJavascriptSearchHavaScriptComponent;
  let fixture: ComponentFixture<ComponentsJavascriptSearchHavaScriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentsJavascriptSearchHavaScriptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsJavascriptSearchHavaScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
