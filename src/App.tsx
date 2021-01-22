import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { QueryClient, QueryClientProvider } from 'react-query';
import LoadingIndicator from './components/LoadingIndicator';

const Users = lazy(() => import('./pages/Users'));
const User = lazy(() => import('./pages/User'));
const Todos = lazy(() => import('./pages/Todos'));

const queryClient = new QueryClient();

export const App = () => (
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <ColorModeSwitcher justifySelf="flex-end" />
      <Suspense fallback={<LoadingIndicator fullScreen />}>
        <Router>
          <Switch>
            <Route exact path="/users" component={Users} />
            <Route exact path="/users/:id" component={User} />
            <Route exact path="/users/:id/todos" component={Todos} />
            <Redirect to="/users" />
          </Switch>
        </Router>
      </Suspense>
    </QueryClientProvider>
  </ChakraProvider>
);
