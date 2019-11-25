import React from 'react';
import styles from './Loader.module.scss';
import loader from './loader.gif';

const Loader = () => (
    <div className={styles.loader}>
        <img src={loader}/>
        <p>Szybko, szybko!</p>
    </div>
);

export default Loader;
