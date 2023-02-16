const express = require('express');
const app = express();
const db = require('./db');


const port = process.env.PORT || 3000;

app.listen(port, async()=> {
  try {
    console.log(`listening on port ${port}`);
    await db.conn.sync({ force: true });
    const [ lucy, moe, larry, ethyl ] = await Promise.all([
      db.Person.create({ name: 'lucy' }),
      db.Person.create({ name: 'moe' }),
      db.Person.create({ name: 'larry' }),
      db.Person.create({ name: 'ethyl' }),
    ]);
    console.log(moe.name, moe.id);
  }
  catch(ex){
    console.log(ex);
  }
});
