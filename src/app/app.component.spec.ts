import { TestBed, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoService } from './services/todo.service';

describe('AppComponent', () => {
  let fakeTodoService = {
      addTask : jasmine.createSpy('addTask')
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    providers: [
      { 
        provide : TodoService, 
        useValue : fakeTodoService
      }
    ],     
    schemas : [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'TODO List'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('TODO List');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('TODO List');
  }));

  it('should call addTask in the service', async (() => {
    const fixture = TestBed.createComponent(AppComponent);   
    const app = fixture.debugElement.componentInstance;
    app.addTask('hello');
    expect(fakeTodoService.addTask).toHaveBeenCalledTimes(1);
    expect(fakeTodoService.addTask).toHaveBeenCalledWith('hello')
  }));
});
