import React, { FC } from 'react';
import Info from '../../entities/UsersPage/components/Info/Info';

import Footer from '../../shared/Footer';
import Header from '../../shared/Header';
import Sidebar from '../../shared/Sidebar';
import style from './PageLayout.module.scss';

interface IPageLayout {
  children: React.ReactNode;
}

const PageLayout: FC<IPageLayout> = ({ children }) => {
  return (
    <div className={style.page_wrapper}>
      <Header />
      <div className={style.section_wrapper}>
        <Sidebar />
        <div>
          <Info />
          <div className={style.content_wrapper}>{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PageLayout;
