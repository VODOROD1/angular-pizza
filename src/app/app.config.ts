import { provideAnimations } from "@angular/platform-browser/animations";
import { TuiRootModule } from "@taiga-ui/core";
import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { StoreModule, provideStore } from '@ngrx/store';
import { StoreDevtoolsModule, provideStoreDevtools } from '@ngrx/store-devtools';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { StoreRouterConnectingModule, provideRouterStore } from '@ngrx/router-store';
import { metaReducers, reducers } from "./ngrx/reducers";
import { environment } from "../environment/environment";
import { AppEffects } from "./app.effects";
import { provideHttpClient } from "@angular/common/http";
import { HomeComponent } from "./components/home/home.component";
import { CartComponent } from "./components/cart/cart.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

// определение маршрутов
const appRoutes: Routes = [
  { path: "", component: HomeComponent},
  { path: "cart", component: CartComponent},
  { path: "**", component:  NotFoundComponent}
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(routes),
    importProvidersFrom(TuiRootModule),
    provideStore(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects(),
    provideRouterStore(),
    importProvidersFrom(RouterModule.forRoot(routes)),
    importProvidersFrom(
      StoreModule.forRoot(reducers, {
        metaReducers,
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true
        }
      })
    ),
    importProvidersFrom(
      StoreDevtoolsModule.instrument({
        maxAge: 25, 
        logOnly: environment.production 
      }),
    ),
    importProvidersFrom(
      EffectsModule.forRoot([AppEffects]),
    ),
    importProvidersFrom(
      StoreRouterConnectingModule.forRoot()
    ),
    provideHttpClient(),
    provideRouter(appRoutes)
  ]
};
