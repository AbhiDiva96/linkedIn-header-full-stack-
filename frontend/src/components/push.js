import React from 'react'

function push() {

    
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
 
  const handlePushCommand = async() => {
     try{
       console.log('mid')
        await axios.post('/commands', {name, link});
        alert('command pushed successfully! ');
        setName('');
        setLink('');
     } catch(error){
       console.error('error , something error', error);
     }
     console.log('end')
  };
 
  const handleCallCommand = async () => {
   try {
      console.log('executed successfully')
     window.location.href = `http://localhost:8000/commands/${name}`;
   } catch (error) {
     console.error('Error calling command:', error);
   }
 };
 
 const handleCommandChange = (e) => {
   setName(e.target.value);
 };
 
 const handleKeyPress = async (event) => {
   if (event.key === 'Enter') {
     event.preventDefault();
     await handlePushCommand();
   }
 };
 
  return (
    <div>
        <h1>command system</h1>
        <h3>push command</h3>
       
          <input type="text" 
          placeholder='command Name'
          value={name}
          onChange={(e) => setName(e.target.value) }
          onKeyPress={handleKeyPress}
          />
     <br />

          <input type="text"
           placeholder='command link'
           value={link}
           onChange={(e) => setLink(e.target.value)}
           onke
          />
          <br />
          <button onClick={handlePushCommand}>Push command</button>
          <br />
        
    </div>
  )
}

export default push
