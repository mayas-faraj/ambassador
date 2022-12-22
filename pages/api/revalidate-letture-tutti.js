const dotenv=require("dotenv");
dotenv.config();

export default async function handler(req, res) {
  if (req.query.secret !== process.env.SECRET_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  try {
   const siteUrls=require("/public/siteUrls"); 
   const data=await fetch(siteUrls.backendApiUrl, {
	"method": "post", "headers": {
		"Content-Type": "application/json"
	}, 
	"body": JSON.stringify({"operation": "read-articles", "count": 100})
   });
   const articles=await data.json();
   articles.map(async article=>await res.revalidate(`/article/${article.slug}`));
   return res.json({ revalidated: true })
  } catch (err) {
    return res.status(500).send('Error revalidating')
  }
}
