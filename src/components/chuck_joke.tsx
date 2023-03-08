import Joke from '../joke';
interface ChuckJokeProps {
    id: number;
    jokes: string;
}


const ChuckJoke: React.FC<ChuckJokeProps> = ({id, jokes}) => {
    return (
        <>
        <p>{id}</p>
         <p>{jokes}</p>
        </>
    );
}

export default ChuckJoke;

