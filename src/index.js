import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);
dayjs.locale('pt-br');

ReactDOM.render(<App />, document.getElementById('root'));
