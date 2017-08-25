import { RouterModule, Routes  } from '@angular/router';

//Components I will route to
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';

//Blog pages
//import the three serieses
import { PastPresentFutureComponent } from './blog/past-present-future/past-present-future.component';
import { TechComponent } from './blog/tech/tech.component';
import { TheBucketComponent } from './blog/the-bucket/the-bucket.component';

//Topics in the past present future series
import { CarsComponent } from './blog/past-present-future/cars/cars.component';
import { PlanesComponent } from './blog/past-present-future/planes/planes.component';

//Topics in the tech series
import { AiComponent } from './blog/tech/ai/ai.component';
import { DriverlessCarsComponent } from './blog/tech/driverless-cars/driverless-cars.component';

//Topics in the bucket series
import { TravelComponent } from './blog/the-bucket/travel/travel.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'blog/ppf', component: PastPresentFutureComponent },
    { path: 'blog/ppf/cars', component: CarsComponent },
    { path: 'blog/ppf/planes', component: PlanesComponent },
    { path: 'blog/tech', component: TechComponent },
    { path: 'blog/tech/ai', component: AiComponent },
    { path: 'blog/tecjdriverless-cars', component: DriverlessCarsComponent },
    { path: 'blog/thebucket', component: TheBucketComponent },
    { path: 'blog/thebucket/travel', component: TravelComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'home', component: HomeComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'resume', component: ResumeComponent },
];

export const AppRoutes = RouterModule.forRoot(routes);