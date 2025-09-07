import ratelimit from '../config/upstash.js'

const rateLimiter = async (req, res, next) => {
    // 
    try {
        const { success } = await ratelimit.limit("my-rate-limit") // check if the user has exceeded the rate limit
        if (!success) {
            return res.status(429).json({ message: "Too many requests, please try again later." })
        }
        next() // user is within the rate limit, proceed to the next middleware or route handler
    } catch (error) {
        console.log("rate limit error", error)
        next(error)
    }
}

export default rateLimiter