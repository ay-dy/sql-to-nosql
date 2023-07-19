import React, { useState } from 'react';
import Convert from './components/main/Convert';
import Header from './components/main/Header';
import MongoDBConnectionForm from './components/main/MongoDBConnectionForm';
import MySQLConnectionForm from './components/main/MySQLConnectionForm';

export default function App() {
  const [isMysqlConnected, setIsMysqlConnected] = useState(false);
  const [isMongodbConnected, setIsMongodbConnected] = useState(false);
  const [isConverting, setIsConverting] = useState(false);

  return (
    <>
      <Header />
      <MySQLConnectionForm
        isConnected={isMysqlConnected}
        setIsConnected={setIsMysqlConnected}
        isConverting={isConverting}
      />
      <MongoDBConnectionForm
        isConnected={isMongodbConnected}
        setIsConnected={setIsMongodbConnected}
        isConverting={isConverting}
      />
      <Convert
        isMysqlConnected={isMysqlConnected}
        isMongodbConnected={isMongodbConnected}
        isConverting={isConverting}
        setIsConverting={setIsConverting}
      />
    </>
  )
}