const handleClarifai =async (req, res) => {
    const { imageUrl } = req.body;

    const PAT = process.env.CLARIFAI_PAT;

    const MODEL_OWNER_USER_ID = 'clarifai';
    const MODEL_OWNER_APP_ID = 'main';
    const MODEL_ID = 'face-detection';

    const payload = {
        user_app_id: { user_id: MODEL_OWNER_USER_ID, app_id: MODEL_OWNER_APP_ID },
        inputs: [{ data: { image: { url: imageUrl } } }]
    };

    try {
        const r = await fetch(
        `https://api.clarifai.com/v2/users/${MODEL_OWNER_USER_ID}/apps/${MODEL_OWNER_APP_ID}/models/${MODEL_ID}/outputs`,
        {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Key ${PAT}`
            },
            body: JSON.stringify(payload)
        }
        );

        const data = await r.json();
        return res.json(data);
    } catch (err) {
        console.error(err);
        return res.status(500).json('Unable to work with Clarifai');
    }
}

module.exports = {
    handleClarifai
};