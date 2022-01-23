import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './Components/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './Components/template-driven-form/template-driven-form.component';

const routes: Routes = [
{
  path:'ReactiveForm',
  component:ReactiveFormComponent
},
{
  path:'TemplateDrivenForm',
  component:TemplateDrivenFormComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
