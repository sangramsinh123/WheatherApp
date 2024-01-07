import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component'; // Import your components used for routing
// Import other components for routing as needed (e.g., AboutComponent, ContactComponent, etc.)

const routes: Routes = [
  { path: '' }, // Define a default route to HomeComponent
  // Define other routes as needed
  // { path: 'about', component: AboutComponent },
  // { path: 'contact', component: ContactComponent },
  // ...other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Set up the routes using RouterModule.forRoot() and pass the defined routes
  exports: [RouterModule] // Export RouterModule to be used in AppModule
})
export class AppRoutingModule { }
