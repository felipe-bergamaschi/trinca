"use client";

export async function Login() {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('ok')
    }, 2000)
  })

  return (
    <h1>login</h1>
  )
}