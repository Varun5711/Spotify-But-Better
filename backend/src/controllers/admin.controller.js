import { Album } from "../models/album.model.js";
import { Song } from "../models/song.model.js";

import { cloudinary } from "../lib/cloudinary.js";

const uploadToCloudinary = async (file) => {
    try {
        const result = await cloudinary.uploader.upload(file.tempFilePath, {
            resource_type: "auto",
        });
        return result.secure_url
    } catch (err) {
        console.log("Error in uploadtoclodunary", err);
        throw new Error("Error in uploadingtocloudinary", err);
    }
}

export const createSong = async (req, res, next) => {
    try {
        if (!req.files || !req.files.audioFile || !req.files.imageFile) {
            return res.status(400).json({ message: "Please upload all files" });
        }

        const { title, artist, albumId, duration } = req.body;
        const audioFile = req.files.audioFile;
        const imageFile = req.files.imageFile;

        const audioUrl = await uploadToCloudinary(audioFile);
        const imageUrl = await uploadToCloudinary(imageFile);

        const song = new Song({
            title,
            artist,
            audioUrl,
            imageUrl,
            duration,
            albumId: albumId || null
        });

        await song.save();

        //if songs belong to an an album this is to update songs of array
        if (albumId) {
            await Album.findByIdAndUpdate(albumId, {
                $push: { songs: song._id }
            });
        }
        res.status(201).json(song);

    } catch (err) {
        console.log("Error in create Song", err);
        next(err);
    }
};

export const deleteSong = async(req , res , next) => {
    try {
        const {id} = req.params;
        const song = await Song.findById(id);

        //if songs belongs to album
        if(song.albumId) {
            await Album.findByIdAndUpdate(song.albumId , {
                $pull : {songs : song._id},
            })
        }

        await Song.findByIdAndDelete(id);

        res.status(200).json({message : "Song deleted Successfully"});

    } catch (err) {
        console.log("Error in deleting the song" , err);
        next(err);
    }
};

export const createAlbum = async(req , res) => {
    try {
        const {title , artist , releaseYear} = req.body;
        const {imageFile} = req.files;

        const imageUrl = await uploadToCloudinary(imageFile);

        const album = new Album({
            title,
            artist,
            imageUrl,
            releaseYear
        });

        await album.save();

        res.status(201).json(album);

    } catch (err) {
        console.log("Error in createAlbum" , err);
        next(err);
    }
};

export const deleteAlbum = async(req , res) => {
    try {
        const {id} = req.params;
        await Song.deleteMany({
            albumId : id
        })
        await Album.findByIdAndDelete(id);
        
        res.status(200).json({message : "Album deleted successfully"});
        
    } catch (err) {
        console.log("Error in deleteing Album", err);
        next(err);
    }
};

export const checkAdmin = async(req , res, next) => {
    return res.status(200).json({admin : true});
};