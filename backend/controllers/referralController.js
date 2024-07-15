import sendReferralEmail from "../utils/mailer.js";
import prisma from "../prisma/prismaClient.js";


export const submitReferral = async (req, res) => {

    console.log("reaches here");
    const { referrerName, referrerEmail, referrerPhone, relationship, refereeName, refereeEmail, refereePhone, message } = req.body;

    // Validate input
    if (!referrerName || !referrerEmail || !refereeName || !refereeEmail) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const referral = await prisma.referral.create({
            data: {
                referrerName,
                referrerEmail,
                referrerPhone,
                relationship,
                refereeName,
                refereeEmail,
                refereePhone,
                message
            }
        });

        // Send referral email
        await sendReferralEmail(referrerEmail, refereeEmail, message);

        res.status(201).json(referral);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while saving the referral' });
    }
}