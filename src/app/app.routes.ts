import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { FavoritesComponent } from './favorites/favorites.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        title: "Home"
    },
    {
        path: "details/:id",
        component: DetailComponent,
        title: "Details"
    },
    {
        path: "favorites",
        component: FavoritesComponent,
        title: "Favorites"
    },
];
