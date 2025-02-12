import { Routes } from '@angular/router';
import { InlineTableEditingComponent } from './components/inline-table-editing/inline-table-editing.component';
import { MultipleDataFormComponent } from './components/multiple-data-form/multiple-data-form.component';

export const routes: Routes = [
    {path: '', redirectTo: 'inline-table-editing', pathMatch: 'full'},
    {path: 'inline-table-editing', component: InlineTableEditingComponent},
    {path: 'multiple-data-form', component: MultipleDataFormComponent},
];
