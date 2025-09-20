import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
    searchParams,
}: {
    searchParams: Promise<{ query?: string }>;
}) {
    const query = (await searchParams).query || "";
    const post = [
        {
            _createdAt: new Date(),
            views: 55,
            author: {_id: 1, name: "Aurthur" },
            _id: 1,
            description: "This is a test description",
            image: "https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/35cfba9c-4362-4ffd-9718-418343436b1a/Space8.jpg",
            category: "Robots",
            title: "We Robots"
        }
    ]
    return (
        <main>
            <section className="pattern pink-container">
                <h1 className="heading">
                    Pitch your startup <br />
                    Connect with Entrepreneurs
                </h1>
                <p className="sub-heading max-w-3xl">
                    Submit Ideas, Vote on Pitches and Get Noticed in Virtual
                    Competition.
                </p>

                <SearchForm query={query} />
            </section>
            <section className="section_container">
                <p className="text-30-semibold">
                    {
                        query ? `Search results for "${query}"` : "All Startups"
                    }
                </p>
                <ul className="mt-7 card_grid">
                    {
                        post?.length > 0 ? (
                            post.map(post => {
                                return (
                                    <StartupCard key={post._id} post={post} />
                                )
                            })
                        )
                        : (<p className="no-results">No startups found</p>)
                        
                    }
                </ul>
            </section>
        </main>
    );
}
