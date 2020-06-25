import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule,MatSelectModule,MatDatepickerModule,MatNativeDateModule,MatInputModule,MatTableModule,MatIconModule,MatPaginatorModule,MatSortModule,MatCheckboxModule,MatExpansionModule,MatButtonModule,MatDialogModule,MatMenuModule,MatSlideToggleModule,MatButtonToggleModule,MatAutocompleteModule,MatRadioModule,MatCardModule,MatTabsModule,MatTooltipModule,MatBadgeModule,MatBottomSheetModule,MatStepperModule,MatSliderModule,MatProgressBarModule} from '@angular/material';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule} from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatChipsModule,
    MatListModule,
    MatSortModule,
    MatAutocompleteModule,
    MatCardModule,
    MatButtonToggleModule,
    MatBottomSheetModule,
    MatTabsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatButtonModule,
    AppRoutingModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
    MatTooltipModule,
    MatSliderModule,
    MatBadgeModule,
    MatStepperModule,
    MatProgressBarModule,
    MatGridListModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
