import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';


import { NavbarComponent } from './MyComponents/navbar/navbar.component';
import { FooterComponent } from './MyComponents/footer/footer.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { LoginComponent } from './Pages/login/login.component';
import { HomeComponent } from './Pages/home/home.component';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthInterceptorProviders } from './MyServices/auth.interceptor';
import { ADashboardComponent } from './pages/Admin/a-dashboard/a-dashboard.component';
import { UDashboardComponent } from './pages/User/u-dashboard/u-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './Pages/Admin/welcome/welcome.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './Pages/Admin/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from './Pages/Admin/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionComponent } from './Pages/Admin/add-question/add-question.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { USidebarComponent } from './Pages/User/u-sidebar/u-sidebar.component';
import { LoadQuizzesComponent } from './Pages/User/load-quizzes/load-quizzes.component';
import { InstructionsComponent } from './Pages/User/instructions/instructions.component';
import { StartComponent } from './Pages/User/start/start.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from "ngx-ui-loader";

@NgModule({
  declarations: [
    AppComponent,NavbarComponent,FooterComponent,SignupComponent,
    LoginComponent,HomeComponent, ADashboardComponent, UDashboardComponent, ProfileComponent, SidebarComponent, WelcomeComponent, ViewCategoriesComponent, AddCategoryComponent, ViewQuizzesComponent, AddQuizComponent, UpdateQuizComponent, ViewQuizQuestionsComponent, AddQuestionComponent, USidebarComponent, LoadQuizzesComponent, InstructionsComponent, StartComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,BrowserAnimationsModule,MatListModule,CommonModule,
    RouterModule,MatDividerModule,FlexLayoutModule,MatButtonModule,MatFormFieldModule,
    MatInputModule,MatIconModule,FormsModule,HttpClientModule,MatSnackBarModule,MatCardModule,
    MatMenuModule,MatToolbarModule,MatTableModule,MatSlideToggleModule,MatSelectModule,MatGridListModule,CKEditorModule,MatProgressSpinnerModule,NgxUiLoaderModule,NgxUiLoaderHttpModule.forRoot({showForeground:true}),
  ],
  providers: [AuthInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
