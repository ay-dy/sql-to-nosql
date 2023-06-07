import React from 'react';
import ConvertButton from './components/main/ConvertButton';
import Header from './components/main/Header';
import MongoDBConnectionForm from './components/main/MongoDBConnectionForm';
import MySQLConnectionForm from './components/main/MySQLConnectionForm';

export default function App() {
  return (
    <>
      <Header />
      <MySQLConnectionForm />
      <MongoDBConnectionForm />
      <ConvertButton />
    </>
  )
}