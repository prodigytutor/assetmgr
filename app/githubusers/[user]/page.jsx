import Repos from '../../components/repos';

const UserReposPage = ({params:{user}}) => {
    // Fetch user repos data here

    return (
        <div>
            <h1>Repos for {user}</h1>
            <Repos user={user}/>
        </div>
    );
};

export default UserReposPage;
