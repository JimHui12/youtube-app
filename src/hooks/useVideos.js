import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const KEY = "AIzaSyDxEATUyaoqkterXrTiMcgpCeG9mtywV9Y"

const useVideos = (defaultSearchTerm) => {
    const [videos, setVidoes] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term,
                part: 'snippet',
                maxResults: 5,
                key: KEY
            }
        });
        setVidoes(response.data.items);
    };

    return [videos, search];
};

export default useVideos;