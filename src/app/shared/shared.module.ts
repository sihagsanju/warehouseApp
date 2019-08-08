import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppbarComponent } from './appbar/appbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { InventorylistComponent } from './inventorylist/inventorylist.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';


const modules = [
  CommonModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  HttpClientModule,
  FlexLayoutModule,
  FormsModule,
  MatInputModule,
  MatSelectModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [AppbarComponent, InventorylistComponent],
  imports: [...modules],
  exports: [...modules, AppbarComponent,
    InventorylistComponent]
})
export class SharedModule { }
