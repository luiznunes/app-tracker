/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

// (async () => {
//     const db = require("./db");
//     console.log('Começou!');

//     console.log('SELECT * FROM REGISTERS');
//     const clientes = await db.selectRegisters();
//     console.log(clientes);
// })();
// const express = require('express');
// const cors = require('cors');
// const app = express();
// app.use(cors());
// app.get('/', (req, res) => res.send('Home Route'));
// const port = process.env.PORT || 5000;
// app.listen(port, () => console.log(`Server running on port ${port}, http://localhost:${port}`));