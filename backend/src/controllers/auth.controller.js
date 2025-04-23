import { User } from "../models/user.model.js";

export const authCallback = async (req, res , next) => {
    try {
        console.log("Request Body:", req.body);
        const { id, firstName, lastName, imageUrl } = req.body;

        const user = await User.findOne({
            clerkId: id
        });

        if (!user) {
            await User.create({
                clerkId: id,
                fullName: `${firstName || ""} ${lastName || ""}`.trim(),
                imageUrl
            });

            res.status(200).json({ success: true });
        }
        

    } catch (err) {
        console.log("Error in auth callback" , err);
        next(err);
    }
};