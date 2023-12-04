
import Link from 'next/link';
import React from 'react';

const GitHubUsersPage = async() => {
 
    async function fetchGitHubUsers() {
        const response = await fetch('https://api.github.com/search/users?q=nextjs');
        const json = await response.json();
        return json.items;
        }
    const users = await fetchGitHubUsers();
  return (
    <div>
      <h1>GitHub Users</h1>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>URL</th>
        <th>Repos</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {users.map((user) => (
      <tr key={user.id}>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={user.avatar_url} />
              </div>
            </div>
            <div>
              <div className="font-bold">{user.login}</div>
              <div className="text-sm opacity-50">{user.id}</div>
            </div>
          </div>
        </td>
        <td>
          <Link href={user.html_url} className='btn btn-link'>View on Github</Link>
        </td>
        <th>
          <Link href={`/githubusers/${user.login}`} className="btn btn-link">Goto Repos</Link>
        </th>
      </tr>))}
    </tbody>
    {/* foot */}    
  </table>
</div>
    </div>
  );
};

export default GitHubUsersPage;
