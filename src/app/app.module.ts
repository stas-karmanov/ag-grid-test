import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GridModule } from './grid/grid.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, HttpClientModule, GridModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
