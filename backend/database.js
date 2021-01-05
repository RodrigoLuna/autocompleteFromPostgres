const postgres_conn = {
    "host": "localhost",
    "port": 5432,
    "database": "postgres",
    "schema": "bubu",
    "ssl": false,
    "max_query_results": 16,
    "user": "postgres",
    "password": "postgres-pass"
  }
  
  const pgOptions = {
    receive: (data, result, e) => {
      camelizeColumns(data)
    }
  }
  
  const camelizeColumns = data => {
    const template = data[0]
    for (let prop in template) {
      const camel = pgp.utils.camelize(prop)
      if (!(camel in template)) {
        for (let i = 0; i < data.length; i++) {
          let d = data[i]
          d[camel] = d[prop]
          delete d[prop]
        }
      }
    }
  }
  
  const pgp = require('pg-promise')(pgOptions)
  
  const db = pgp(postgres_conn)
  

exports.getCatalogue = () => db.any('SELECT autocomplete.description FROM bubu.autocomplete')