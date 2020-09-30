import React from 'react';
import { Card } from 'grommet';
import './styles/socialcard/app.css';
import CardTitle from './components/socialcard/CardTitle'


function App() {
  return (
        <div className="flex-div">
        <Card animation="fadeIn" justify="between">
          <CardTitle image="IMG" user="Shan Perera" handle="@shanperera" date="Sept 10"></CardTitle>
        </Card>
        </div>
  );
}

export default App;
