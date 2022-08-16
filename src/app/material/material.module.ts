import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    MatFormFieldModule, MatInputModule, 
    MatSelectModule, MatTableModule,
    MatDialogModule,
  ],
  exports: [
    MatFormFieldModule, MatInputModule, 
    MatSelectModule, MatTableModule,
    MatDialogModule,
  ]
})
export class MaterialModule { }
