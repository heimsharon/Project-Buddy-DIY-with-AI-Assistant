export async function loginApi ({
  username,
  password,
  rememberMe,
}: {
  username: string;
  password: string;
  rememberMe: boolean;
}) {
  const res = await fetch('/auth/login', {
    method: 'POST',
    headers:{ 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username,
      password,
      rememberMe
    }),
  });
  const data = await res.json();
  return data;
}

export async Function getProfile() {
  const res = await fetch('/auth/profile', {
    credentials: 'include',
  });

  if (!res.ok) 
    throw new
    Error('Not Authenticated');

    return res.json();
}