const express = require('express');
const app = express();
const db = require('./db');
const { Souvenir, Person, conn } = db;


const port = process.env.PORT || 3000;

app.listen(port, async()=> {
  try {
    console.log(`listening on port ${port}`);
    await conn.sync({ force: true });
    const [ lucy, moe, larry, ethyl ] = await Promise.all([
      Person.create({ name: 'lucy' }),
      Person.create({ name: 'moe' }),
      Person.create({ name: 'larry' }),
      Person.create({ name: 'ethyl' }),
    ]);

    await Promise.all([
      Souvenir.create({ personId: lucy.id }),
      Souvenir.create( { personId: lucy.id }),
    ]);
  }
  catch(ex){
    console.log(ex);
  }
});
