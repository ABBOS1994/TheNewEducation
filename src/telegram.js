export function telegram(data) {
  const token = '';
  const chat_id = '';
  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${data}`;

  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((r) => r)
    .catch((e) => e);
}
