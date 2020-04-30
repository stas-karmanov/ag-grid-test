import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridModule } from './grid/grid.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, HttpClientModule, GridModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
