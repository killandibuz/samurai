import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AboutComponent],
  imports: [SharedModule, CommonModule, AboutRoutingModule],
})
export class AboutModule {}
