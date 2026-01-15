require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const githubdata = {
  "login": "Brijesh-0909",
  "id": 202299768,
  "node_id": "U_kgDODA7ZeA",
  "avatar_url": "https://avatars.githubusercontent.com/u/202299768?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Brijesh-0909",
  "html_url": "https://github.com/Brijesh-0909",
  "followers_url": "https://api.github.com/users/Brijesh-0909/followers",
  "following_url": "https://api.github.com/users/Brijesh-0909/following{/other_user}",
  "gists_url": "https://api.github.com/users/Brijesh-0909/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Brijesh-0909/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Brijesh-0909/subscriptions",
  "organizations_url": "https://api.github.com/users/Brijesh-0909/orgs",
  "repos_url": "https://api.github.com/users/Brijesh-0909/repos",
  "events_url": "https://api.github.com/users/Brijesh-0909/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Brijesh-0909/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 4,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2025-03-07T14:25:29Z",
  "updated_at": "2026-01-13T05:27:29Z"
}



app.get('/twitter',(req,res)=>{
    res.send("brijesh@1");
});


app.get('/login',(req,res)=>{
    res.send('<h1> please login </h1>')
})


app.get('/github',(req,res)=>{
    res.json(githubdata)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
