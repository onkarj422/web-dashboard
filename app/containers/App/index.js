/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import MediaQueryProvider from 'providers/MediaQuery';
import LayoutProvider from 'layouts/ShellLayout/LayoutProvider';
import Router from './components/Router';

import GlobalStyle from '../../global-styles';
import routes from './routes';
import './styles.scss';
import Layout from '../../layouts/ShellLayout/index';

export default function App() {
  return (
    <MediaQueryProvider>
      <div>
        <BrowserRouter>
          <LayoutProvider>
            <Layout>
              <Router routes={routes} />
            </Layout>
          </LayoutProvider>
        </BrowserRouter>
        <GlobalStyle />
      </div>
    </MediaQueryProvider>
  );
}
