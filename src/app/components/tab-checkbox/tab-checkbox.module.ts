import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { TabCheckboxComponent } from './tab-checkbox.component';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  imports: [
    CommonModule,
    NzModalModule,
    NzButtonModule,
    NzInputModule,
    NzCheckboxModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NzRadioModule,
    NzIconModule
  ],
  declarations: [
    TabCheckboxComponent
  ],
  exports: [TabCheckboxComponent]
})
export class TabCheckboxModule {}
