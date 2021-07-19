import './style/profiles.scss';

const Profiles = ({id, name, username}) => {
    return (
        <div className='profiles-container'>
            <span>{id}</span>
            <span>{name}</span>
            <span>{username}</span>
        </div>
    )
}
export default Profiles;