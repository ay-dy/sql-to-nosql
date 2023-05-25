import React from 'react';
import Header from './components/Header';
import MongoDBConnectionForm from './components/MongoDBConnectionForm';
import MySQLConnectionForm from './components/MySQLConnectionForm';

export default function App() {
  return (
    <>
      <Header />
      <MySQLConnectionForm />
      <MongoDBConnectionForm />
    </>
  )
}