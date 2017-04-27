import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { TodoDisplayComponent } from './components/todo-display/todo-display.component';

import { TodoService } from './services/todo.service';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { todoReducer } from './store/todo-reducer';
import { userReducer } from './store/user-reducer';

@NgModule({
  declarations: [
    AppComponent,
    TextInputComponent,
    TodoDisplayComponent,
    CapitalizePipe // Need to initialize  , use inspector tools to debug. Template parse error.
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(
      {
        todoList : todoReducer,
        users : userReducer
      }
    ) , // Create a store.  Initialize only.  Store going to take over the data layer from the service.
    StoreDevtoolsModule.instrumentOnlyWithExtension( { maxAge : 5})

  ],
  // providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
