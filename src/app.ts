import app from './server';

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
