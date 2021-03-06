import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Articles from './components/articles/Articles';
import Article from './components/articles/Article';
import ArticleForm from './components/articles/ArticleForm';

const App = () => {
  return (
    <BrowserRouter>
    <Container>
      <Switch>
        <Route exact path='/' component={ArticleForm}/>
        <Route path='/articles/:articleId/edit' component={ArticleForm}/>
        <Route path='/articles/:articleId' component={Article}/>
        <Route path='/articles' component={Articles}/>
      </Switch>
    </Container>
    </BrowserRouter>
  )
};

export default App;
