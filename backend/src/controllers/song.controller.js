import { Song } from "../models/song.model.js";

export const getAllSongs = async (req, res) => {
    try {
        // -1 = decending => newest -> oldest
        const songs = await Song.find().sort({ createdAt: -1 });
        res.json(songs);
    } catch (err) {
        next(err);
    }
};

export const getFeauturedSongs = async (req, res, next) => {
    try {
        //fetch 6 random songs using mongodb's aggregation pipeline
        const songs = await Song.aggregate([
            {
                $sample : {size : 6}
            },
            {
                $project : {
                    _id : 1,
                    title : 1,
                    artist : 1,
                    imageUrl : 1,
                    audioUrl : 1
                }
            }
        ]);

        res.json(songs);
    } catch (err) {
        next(err);
    }
};

export const getMadeForYouSongs = async (req, res, next) => {
    try {
        //fetch 6 random songs using mongodb's aggregation pipeline
        const songs = await Song.aggregate([
            {
                $sample : {size : 4}
            },
            {
                $project : {
                    _id : 1,
                    title : 1,
                    artist : 1,
                    imageUrl : 1,
                    audioUrl : 1
                }
            }
        ]);

        res.json(songs);
    } catch (err) {
        next(err);
    }
};

export const getTrendingSongs = async (req, res, next) => {
    try {
        //fetch 6 random songs using mongodb's aggregation pipeline
        const songs = await Song.aggregate([
            {
                $sample : {size : 4}
            },
            {
                $project : {
                    _id : 1,
                    title : 1,
                    artist : 1,
                    imageUrl : 1,
                    audioUrl : 1
                }
            }
        ]);

        res.json(songs);
    } catch (err) {
        next(err);
    }
};