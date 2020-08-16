import Server from './server';
import cors from 'cors';
import router from './routes/routes';
import bodyParser from 'body-parser';

const initializeMidlewares = () => {
  // CORS
  const corsOptions = {
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  };
  server.app.use(cors(corsOptions));
  server.app.use(bodyParser.json());
};

const initalizeRoutes = () => {
  server.app.use('/', router);
};

const server = Server.instance;
initializeMidlewares();
initalizeRoutes();
server.start();
