import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RecommendationComponent } from './recommendation/recommendation';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { FurnitureComponent } from './furniture/furniture';
@NgModule({
	declarations: [RecommendationComponent,
    FurnitureComponent],
	imports: [
		BrowserModule,
		IonicModule.forRoot(RecommendationComponent,FurnitureComponent)
	],
	exports: [RecommendationComponent,
    FurnitureComponent]
})
export class ComponentsModule {}
