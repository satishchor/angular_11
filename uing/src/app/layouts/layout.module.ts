import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HorizontalComponent } from './horizontal/horizontal.component';
import { VerticalComponent } from './vertical/vertical.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
    declarations: [HorizontalComponent, LayoutComponent, VerticalComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        HorizontalComponent, VerticalComponent
    ]
})

export class LayoutModule {

}