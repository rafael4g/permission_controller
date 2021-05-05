// verificar a se instalou a tipagem @types/express -D
// precisa inicializar o typescript com yarn tsc --init e configurar...
// no arquivo tsconfig.json o target para es2017
import express from 'express'; 
import { router } from './routes';
import "reflect-metadata";
import "./database"


const app = express();

app.use(express.json());

app.use(router);

app.listen(3333, () => {
  console.log(':.Server Running..Port:3333.:')
})