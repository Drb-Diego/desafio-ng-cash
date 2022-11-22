import app from "./app";

const { PORT } = process.env;

app.listen(PORT, () => console.log(`Server up\nhttp://localhost:${PORT}`));
