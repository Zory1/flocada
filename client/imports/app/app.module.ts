import { NgModule, ErrorHandler } from '@angular/core';
import { Flocada } from './app.component';
 
@NgModule({
  declarations: [
    Flocada
  ],
  entryComponents: [
    Flocada
  ],
  providers: [
    { provide: ErrorHandler }
  ]
})
export class AppModule {}