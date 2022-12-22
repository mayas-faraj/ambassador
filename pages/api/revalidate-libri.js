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
	"body": JSON.stringify({"operation": "read-books"})
   });
   const books=await data.json();
   books.map(async book=>await res.revalidate(`/libri/${book.slug}`));
   return res.json({ revalidated: true })
  } catch (err) {
    return res.status(500).send('Error revalidating')
  }
}
