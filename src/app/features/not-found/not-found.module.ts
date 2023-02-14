import { NgModule } from '@angular/core';
import { ViewModule } from 'src/app/shared';
import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundComponent } from './not-found.component';

@NgModule({
	imports: [ViewModule, NotFoundRoutingModule],
	declarations: [NotFoundComponent]
})
export class NotFoundModule {}
