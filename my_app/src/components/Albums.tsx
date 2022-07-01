import React, {FunctionComponent, useEffect, useState} from 'react';
import axios from "axios";
import { useParams } from 'react-router';

type Album = {
    userId: string,
    id: string,
    title: string
}

const Albums: FunctionComponent = () => {
    const {id} = useParams();
    const [albums, setAlbums] = useState<Album[]>([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/albums?userId=${id}`;
        axios.get(url)
            .then(response => setAlbums(response.data));
    }, [id]);

    return (
        <div>
        <table>
        <thead>
            <tr>
                <th>
                    Id
                </th>
                <th>
                    userId
                </th>
                <th>
                    Title
                </th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {albums.map(album =>
                <tr key = {album.id}>
                    <td>{album.id}</td>
                    <td>{album.userId}</td>
                    <td>{album.title}</td>
                    <td><button>View Photos</button></td>
                </tr>
            )}
        </tbody>
    </table>          
        </div>
    )
}

export default React.memo(Albums);

