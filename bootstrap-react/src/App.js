import React from 'react';
import logo from './logo.png';
import './App.scss';

function App() {
  return (
    <div class="d-flex align-items-start">
      <img class="logo" src={logo} alt="logo"/>
      <div>
        <div class="text-framework font-weight-bold">React v16.13.1</div>
        <h1>Bootstrap React</h1>
        <p class="text-muted mb-4">
          Bootstrap customization reused in a React application.
        </p>
        <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-secondary">Secondary</button>
        <button type="button" class="btn btn-success">Success</button>
        <button type="button" class="btn btn-danger">Danger</button>
        <button type="button" class="btn btn-warning">Warning</button>
        <button type="button" class="btn btn-info">Info</button>
        <button type="button" class="btn btn-light">Light</button>
        <button type="button" class="btn btn-dark">Dark</button>
        <button type="button" class="btn btn-link">Link</button>
      </div>
    </div>
  );
}

export default App;
