import React from 'react';
import css from './Notification.module.css';

function Notification({message}) {
return <p className={css.Description}>{message}</p>
}

export default Notification;
