import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DietListComponent } from './diet/diet-list/diet-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { HomeComponent } from './home/home.component';
import { MedicineListComponent } from './medicine-cabinet/medicine-list/medicine-list.component';
import { PatientsListComponent } from './patients/patients-list/patients-list.component';
import { TreatmentsListComponent } from './treatments/treatments-list/treatments-list.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'diet', component: DietListComponent },
      { path: 'medicine-cabinet', component: MedicineListComponent },
      { path: 'patients', component: PatientsListComponent },
      { path: 'treatments', component: TreatmentsListComponent },
    ],
  },
  { path: 'server-error', component: ServerErrorComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
