import express from 'express';
const app = express();
app.get('/',(req,res)=>{
   
    res.send("The server is up")

})

app.get('/api/jokes', async (req, res) => {
    const jokes = [
        { id: 1, title: "some joke 1",content:"This is a joke now laugh and don't stop" },
        { id: 2, title: "some joke 2",content:"This is a joke now laugh and don't stop" },
        { id: 3, title: "some joke 3",content:"This is a joke now laugh and don't stop" },
        { id: 4, title: "some joke 4",content:"This is a joke now laugh and don't stop" },
        { id: 5, title: "some joke 5",content:"This is a joke now laugh and don't stop" },
        { id: 6, title: "some joke 6",content:"This is a joke now laugh and don't stop" },
        { id: 7, title: "some joke 7",content:"This is a joke now laugh and don't stop" }
    ];

    res.json(jokes); // Send the jokes array as JSON response
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`The server is running at port ${PORT}`);
});
