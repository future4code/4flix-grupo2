import { AddressInfo } from 'net'
import app from './presentation/CreateMovie'
import { Movie } from './business/entities/Movie'
import { CreateMovie } from './business/usecases/CreateMovie/createMovieInteractor'
import { MovieGateway } from './business/gateways/MovieGateway'
import { movideDatabase } from './data/movieDatabase'
import { CreateMovie} from './presentation/CreateMovie'

// Trecho do código responsável por inicializar todas as APIs
const server = app.listen(process.env.PORT || 3000, () => {
  if(server){
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

