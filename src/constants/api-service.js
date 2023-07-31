const url = 'http://localhost:5000/api';

export async function connectSQL(config) {
  let status, message;

  try {
    const res = await fetch(url + '/mysql/connect', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(config)
    });
    const data = await res.json();

    status = res.status;
    message = data.message;

  } catch {
    status = 4;
    message = 'Request failed to reach the server.';
  }

  return { status, message };
}

export async function disconnectSQL() {
  let status, message;

  try {
    const res = await fetch(url + '/mysql/disconnect', {
      method: 'POST'
    });
    const data = await res.json();

    status = res.status;
    message = data.message;

  } catch (error) {
    status = 4;
    message = 'Request failed to reach the server.';
  }

  return { status, message };
}

export async function connectMongoDB(config) {
  let status, message;

  try {
    const res = await fetch(url + '/mongodb/connect', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(config)
    });
    const data = await res.json();

    status = res.status;
    message = data.message;
  } catch (error) {
    status = 4;
    message = 'Request failed to reach the server.';
  }

  return { status, message };
}

export async function disconnectMongoDB() {
  let status, message;

  try {
    const res = await fetch(url + '/mongodb/disconnect', {
      method: 'POST'
    });
    const data = await res.json();

    status = res.status;
    message = data.message;

  } catch (error) {
    status = 4;
    message = 'Request failed to reach the server.';
  }

  return { status, message };
}

export async function convert() {
  let status, message;

  try {
    const res = await fetch(url + '/convert', {
      method: 'POST'
    });
    const data = await res.json();

    status = res.status;
    message = data.message;
  } catch (error) {
    console.log(error);
    status = 4;
    message = 'Request failed to reach the server.';
  }

  return { status, message };
}
