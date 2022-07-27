import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatDialogModule,
        MatMenuModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
    ],
    exports: [
        CommonModule,
        MatDialogModule,
        MatMenuModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
    ]
})
export class NgMaterialModule { }
