const BASE_URL = 'https://openmind-api.vercel.app/1-11/';

const commonFetchFunction = async (url, method, headers, body) => {
  let options = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(body),
  };

  const res = await fetch(BASE_URL + url, options);

  if (res.status === 204) return; // 삭제 명령어
  const data = await res.json();

  if (res.ok) {
    return data;
  } else {
    throw new Error(res.status + data.error);
  }
};

// POST
const fetchPost = async (url, body, headers = {}) => {
  return await commonFetchFunction(url, 'POST', headers, body);
};

// GET
const fetchGet = async (url, headers = {}) => {
  return await commonFetchFunction(url, 'GET', headers);
};

// PUT
const fetchPut = async (url, body, headers = {}) => {
  return await commonFetchFunction(url, 'PUT', headers, body);
};

// DELETE
const fetchDelete = async (url, headers = {}) => {
  return await commonFetchFunction(url, 'DELETE', headers);
};

// PATCH
const fetchPatch = async (url, body, headers = {}) => {
  return await commonFetchFunction(url, 'PATCH', headers, body);
};

export { fetchPost, fetchGet, fetchPut, fetchDelete, fetchPatch };
