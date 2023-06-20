const url = 'http://localhost:3000/api';

export async function connectSQL(config) {
  let status, message;

  try {
    const res = await fetch(url + '/sql/connect', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(config)
    });
    const data = await res.json();

    status = res.status;
    message = data.message;

  } catch {
    status = 4;
    message = 'API at rest. Who\'s the alarm?';
  }

  return { status, message };
}

export async function disconnectSQL() {
  let status, message;

  try {
    const res = await fetch(url + '/sql/disconnect', {
      method: 'POST'
    });
    const data = await res.json();

    status = res.status;
    message = data.message;

  } catch (error) {
    status = 4;
    message = 'API at rest. Who\'s the alarm?';
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
    message = 'API at rest. Who\'s the alarm?';
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
    message = 'API at rest. Who\'s the alarm?';
  }

  return { status, message };
}
