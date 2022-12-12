async function handler(req, res) { // can be called anything you like
    const response = await fetch('http://127.0.0.1:8000/deleteStudent', {
      method: 'DELETE',
      body: JSON.stringify(req.body),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    res.json(data)
  }
  
  export default handler;