import { FormData } from "@/app/contact/page";


export function sendEmail(data: FormData) {
  const apiEndpoint = '/api/email';

  // Return the fetch call so we can await it
  return fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',  // Ensure the server knows it's JSON
    },
    body: JSON.stringify(data),  // Send data as a JSON string
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to send email");  // Throw an error if response is not ok
      }
      return res.json();
    })
    .catch((err) => {
      console.error("Error in sendEmail:", err);
      throw err;  // Propagate the error to the caller
    });
}