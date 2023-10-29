import React from 'react';
import css from './Section.module.css';

function Section({ title, children }) {
  return (
    <section>
      <h2 className={css.Title}>{title}</h2>
      {children}
    </section>
  );
}

export default Section;
