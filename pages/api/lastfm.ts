import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) =>
    fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${process.env.LASTFM_USERNAME}&api_key=${process.env.LASTFM_TOKEN}&format=json&limit=5`).then(response => response.json())
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send({error: "Server error"}));
