import { NgModule } from '@angular/core';
import { ViewModule } from 'src/app/shared';
import { NotFoundRoutingModule } from './notFound-routing.module';
import { NotFoundComponent } from './notFound.component';

@NgModule({
  imports: [ViewModule, NotFoundRoutingModule],
  declarations: [NotFoundComponent],
})
export class NotFoundModule {}
