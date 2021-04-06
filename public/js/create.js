async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('#titlepost').value;
    const content = document.querySelector('#newcontent').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post_content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  };
  
document.querySelector('#formpost').addEventListener('submit', newFormHandler);