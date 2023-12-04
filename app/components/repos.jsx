async function fetchGitHubRepos(user) {
    const response = await fetch('https://api.github.com/users/${user}/repos');
    const json = await response.json();
    return json;
    }
const Repos = async({user}) => {
    const repos = await fetchGitHubRepos(user);
    console.log(repos);
    return(
        <div>
            <h1>Repos for {user}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Repo Name</th>
                            <th>Description</th>            
                        </tr>
                    </thead>
                    <tbody>
                        {repos.map((repo) => (
                        <tr key={repo.id}>
                            
                            <td>
                                <Link href={repo.html_url} className='btn btn-link'>View on Github</Link>
                            </td>
                            <th>
                                <Link href={`/githubusers/${repo.login}`} className="btn btn-link">Goto Repos</Link>
                            </th>
                        </tr>))}
                    </tbody>
                    {/* foot */}    
                </table>
            </div>
        </div>
    )
    }
export default Repos;