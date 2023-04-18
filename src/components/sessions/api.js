export const login = async (userInfo, setCurrUser) => {
  const url = 'http://localhost:3000/users/sign_in';
  try {
    const response = await fetch(url, {
      method: 'post',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify(userInfo),
    });
    const data = await response.json();
    if (!response.ok) throw data.error;
    localStorage.setItem('token', response.headers.get('Authorization'));
    setCurrUser(data);
    return data;
  } catch (error) {
    console.log('error', error);
    return error;
  }
};

export const logout = async (setCurrUser) => {
  try {
    const response = await fetch('http://localhost:3000/users/sign_out', {
      method: 'delete',
      headers: {
        'content-type': 'application/json',
        authorization: localStorage.getItem('token'),
      },
    });
    const data = await response.json();
    if (!response.ok) throw data.error;
    localStorage.removeItem('token');
    setCurrUser(null);
    return data;
  } catch (error) {
    return error;
  }
};

export const signup = async (userInfo) => {
  const url = 'http://localhost:3000/users';
  try {
    const response = await fetch(url, {
      method: 'post',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify(userInfo),
    });
    const data = await response.json();
    if (!response.ok) throw data.error;
    localStorage.setItem('token', response.headers.get('Authorization'));
    //   setCurrUser(data);
  } catch (error) {
    console.log('error', error);
  }
};
