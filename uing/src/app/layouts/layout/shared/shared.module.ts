import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { TopperComponent } from './topper/topper.component';

@NgModule({
    declarations : [TopperComponent],
    imports: [ ],
    exports : [TopperComponent]
})

export class SharedModule {
    
}