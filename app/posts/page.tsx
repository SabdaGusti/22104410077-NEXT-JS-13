
import CardList from "../components/Posts/CardList"
import ViewUserButtons from "../components/Posts/ViewUserButtons"

const base_url = "https://jsonplaceholder.typicode.com/posts";

interface Iposts {
    userId: number,
    id: number,
    tittle: string,
    body: string
}

const Posts = async() => {
    const response = await fetch(base_url,{
        next: { revalidate: 10}
    });
    const posts: Iposts[] = await response.json();
    return (
        <>
        <p>{new Date().toLocaleTimeString()}</p>
            <h1 className="text-fuchsia-500">POSTINGAN PAGE</h1>
            {posts.map((post) => {
                return (
                <CardList key={post.id}>
                    <p>{post.id}</p>
                    <i>{post.tittle}</i>
                    <p>{post.body}</p>
                    <ViewUserButtons userId={post.userId}/>
                </CardList>);
            })}
            
            
        </>
    )
}

export default Posts