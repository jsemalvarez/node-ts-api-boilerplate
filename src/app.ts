import { envs } from './config/envs';
import app from './server';

const PORT = envs.PORT;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
