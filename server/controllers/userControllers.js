import { Webhook } from "svix";

// API Controller Function to Manage Clerk User with database
// http://localhost:5000/api/user/webhooks
const clerkWebhooks = async (req, res) => {
  try {
    // Create a Svix instance with clerk webhook secret
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    await whook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    const { data, type } = req.body;

    switch (type) {
      case "user.created": {
        const userData = {
          clerkId: data.id,
          email: data.email_addresses[0].email_address,
          firstName: data.first_name,
          lastName: data.last_name,
          photo: data.image_url,
        };
        await userModels.create(userData);
      }
      case "user.updated": {
      }
      case "user.deleted": {
      }
      default: {
        console.log("Webhook event not found");
      }
    }
  } catch (error) {
    console.log(error.message);
    res.json({ sucess: false, message: error.message });
  }
};
