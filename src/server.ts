import { Application } from './server/application';
import { AuthProvider } from './server/config/auth.provider';
import { DataService } from './server/data';

import { port } from './server/config';

let data = new DataService();

let app = new Application(data);
let auth = new AuthProvider(data);

auth.attachTo(app);

import { loadRoutes } from './server/routes';
loadRoutes(app, data);

app.config()
    .run(port, () => console.log('App is running!'));
