import { ProjectService } from './services/project.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddProjectsComponent } from './components/java/add-projects/add-projects.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchJavaComponent } from './components/java/search-java/search-java.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchJavaComponent,
    AddProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
