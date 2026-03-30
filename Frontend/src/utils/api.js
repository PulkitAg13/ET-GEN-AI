const BASE_URL = "http://127.0.0.1:8000";

export async function createUser(data) {
  const res = await fetch(`${BASE_URL}/user/create`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  });
  return res.json();
}

export async function addFinance(data) {
  const res = await fetch(`${BASE_URL}/finance/add`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  });
  return res.json();
}

export async function getScore(userId) {
  const res = await fetch(`${BASE_URL}/finance/score/${userId}`);
  return res.json();
}

export async function chatAI(userId) {
  const res = await fetch(`${BASE_URL}/advisor/chat/${userId}`);
  return res.json();
}

/* 🆕 ADD BELOW */

// 💬 Ask AI (free query)
export async function askAI(query) {
  const res = await fetch(`${BASE_URL}/ai/ask`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ query })
  });
  return res.json();
}

export async function calculateSIP(userId) {
  const res = await fetch(`${BASE_URL}/finance/sip/${userId}`, {
    method: "GET",
  });

  return res.json();
}

export async function calculateTax(data) {
  const queryParams = new URLSearchParams(data).toString();

  const res = await fetch(`${BASE_URL}/tax/basic?${queryParams}`, {
    method: "GET",
  });

  return res.json();
}