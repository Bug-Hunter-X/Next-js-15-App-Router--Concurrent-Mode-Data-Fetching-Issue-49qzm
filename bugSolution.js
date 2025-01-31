```javascript
// pages/index.js
export default async function Home() {
  const data = await fetchData(); 

  return (
    <div>Hello {data}</div>
  );
}

async function fetchData() {
  //Simulate a fetch from an API
  await new Promise(resolve => setTimeout(resolve, 1000));
  return 'World!';
}
```