import { NgModule } from '@angular/core'
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatSelectModule } from '@angular/material/select'
import { MatTabsModule } from '@angular/material/tabs'

const MaterialComponents = [
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatSidenavModule,
  MatSelectModule,
  MatTabsModule
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})

export class MaterialModule { }
