export const sendFormData = async formData => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (!response.ok) throw new Error('Error sending data!');

    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
