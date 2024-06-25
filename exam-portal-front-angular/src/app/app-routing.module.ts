import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './MyServices/admin.guard';
import { UserGuard } from './MyServices/user.guard';
import { ADashboardComponent } from './pages/Admin/a-dashboard/a-dashboard.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { AddQuestionComponent } from './Pages/Admin/add-question/add-question.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './Pages/Admin/update-quiz/update-quiz.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { ViewQuizQuestionsComponent } from './Pages/Admin/view-quiz-questions/view-quiz-questions.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { WelcomeComponent } from './Pages/Admin/welcome/welcome.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { InstructionsComponent } from './Pages/User/instructions/instructions.component';
import { LoadQuizzesComponent } from './Pages/User/load-quizzes/load-quizzes.component';
import { StartComponent } from './Pages/User/start/start.component';
import { UDashboardComponent } from './pages/User/u-dashboard/u-dashboard.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    pathMatch:"full"
  },
  {
    path:"signup",
    component:SignupComponent,
    pathMatch:"full"
  },
  {
    path:"login",
    component:LoginComponent,
    pathMatch:"full"
  },
  {
    path:"user-dashboard",
    component:UDashboardComponent,
    canActivate:[UserGuard],
    children:[
      {
        path:':categoryId',
        component:LoadQuizzesComponent
      },
      {
        path:'instructions/:quizId',
        component:InstructionsComponent
      }
    ]
  },
  {
    path:'start/:quizId',
    component:StartComponent,
    canActivate:[UserGuard],
  },
  {
    path:"admin",
    component:ADashboardComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:'',
        component:WelcomeComponent
      },
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'categories',
        component:ViewCategoriesComponent
      },
      {
        path:'add-category',
        component:AddCategoryComponent
      },
      {
        path:'quizzes',
        component:ViewQuizzesComponent
      },
      {
        path:'add-quiz',
        component:AddQuizComponent
      },
      {
        path:'quiz/:quizId',
        component:UpdateQuizComponent
      },
      {
        path:'view-questions/:id/:title',
        component:ViewQuizQuestionsComponent
      },
      {
        path:'add-question/:quizId/:quizTitle',
        component:AddQuestionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
