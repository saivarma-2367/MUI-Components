const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const top100Movies = [
  { label: 'Mayabazar (1957)' },
  { label: 'Maa Bhoomi (1979)' },
  { label: 'Pathala Bhairavi (1951)' },
  { label: 'Sankarabharanam (1979)' },
  { label: 'Sagara Sangamam (1983)' },
  { label: 'Swathi Muthyam (1986)' },
  { label: 'Rudraveena (1988)' },
  { label: 'Annamayya (1997)' },
  { label: 'Nuvvu Naaku Nachav (2001)' },
  { label: 'Khushi (2001)' },
  { label: 'Aadavari Matalaku Arthale Verule (2007)' },
  { label: 'Happy Days (2007)' },
  { label: 'Gamyam (2008)' },
  { label: 'Vedam (2010)' },
  { label: 'Arya (2004)' },
  { label: 'Pokiri (2006)' },
  { label: 'Magadheera (2009)' },
  { label: 'Eega (2012)' },
  { label: 'Seethamma Vakitlo Sirimalle Chettu (2013)' },
  { label: 'Manam (2014)' },
  { label: 'Baahubali: The Beginning (2015)' },
  { label: 'Baahubali: The Conclusion (2017)' },
  { label: 'Arjun Reddy (2017)' },
  { label: 'Rangasthalam (2018)' },
  { label: 'Mahanati (2018)' },
  { label: 'Jersey (2019)' },
  { label: 'Ala Vaikunthapurramuloo (2020)' },
  { label: 'Pushpa: The Rise (2021)' },
  { label: 'RRR (2022)' },
  { label: 'Dasara (2023)' },
  { label: 'Vikramarkudu (2006)' },
  { label: 'Athadu (2005)' },
  { label: 'Businessman (2012)' },
  { label: 'Temper (2015)' },
  { label: 'Nannaku Prematho (2016)' },
  { label: 'Sarileru Neekevvaru (2020)' },
  { label: 'Sye (2004)' },
  { label: 'Simhadri (2003)' },
  { label: 'Tagore (2003)' },
  { label: 'Okkadu (2003)' },
  { label: 'Chatrapathi (2005)' },
  { label: 'Leader (2010)' },
  { label: 'Kanche (2015)' },
  { label: 'Brochevarevarura (2019)' },
  { label: 'Agent Sai Srinivasa Athreya (2019)' },
  { label: 'Goodachari (2018)' },
  { label: 'Evaru (2019)' },
  { label: 'Color Photo (2020)' },
  { label: 'Sita Ramam (2022)' },
];

const columns=[
  {field:'id',headerName:'ID',width:30},
  {field:'firstName',headerName:'First Name',width:90},
  {field:'lastName',headerName:'Last Name',width:90},
]

const rows=[
  {id:1,firstName:'Sai',lastName:'Varma'},
  {id:2,firstName:'Sai',lastName:'Ram'},
  {id:3,firstName:'Raghu',lastName:'Ram'},
  {id:4,firstName:'Sai',lastName:'Varma'},
  {id:5,firstName:'Sai',lastName:'Ram'},
  {id:6,firstName:'Raghu',lastName:'Ram'},
  {id:7,firstName:'Sai',lastName:'Varma'},
  {id:8,firstName:'Sai',lastName:'Ram'},
  {id:9,firstName:'Raghu',lastName:'Ram'},
]

app.get('/autoComplete',(req,res)=>{
  const query=req.query.q?.toLowerCase()||'';
  const filtered=top100Movies.filter(movie=>
    movie.label.toLowerCase().includes(query)
  );
  res.json(filtered);
});

app.get('/tabledata',(req,res)=>{
  const data={
    rows : rows,
    columns: columns
  }
  res.json(data);
})

app.get('/', (req, res) => {
  res.send('Backend is running 🚀');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server started on http://localhost:${PORT}`);
});