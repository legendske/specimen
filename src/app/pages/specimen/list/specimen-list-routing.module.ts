import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpecimenListComponent } from './specimen-list.component';

const routes: Routes = [
    {
        path: '',
        component: SpecimenListComponent,
        data: { title: 'Specimens' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SpecimenListRoutingModule { }
