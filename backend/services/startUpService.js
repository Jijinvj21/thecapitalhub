import { UserModel } from "../models/User.js";
import { StartUpModel } from "../models/startUp.js";
import { sendMail } from "../utils/mailHelper.js";

export const createStartup = async (startUpData) => {
  try {
    let existingCompany = await StartUpModel.findOne({
      founderId: startUpData.founderId,
    });
    if (existingCompany) {
      existingCompany.set({
        ...startUpData,
      });
      await existingCompany.save();
      return {
        status: 200,
        message: "Startup Updated",
      };
    }
    const newStartUp = new StartUpModel({
      ...startUpData,
    });
    await newStartUp.save();
    const { founderId } = newStartUp;
    await UserModel.findByIdAndUpdate(founderId, {
      startUp: newStartUp._id,
      gender: newStartUp.gender,
    });
    return {
      status: 200,
      message: "Startup Added",
    };
  } catch (error) {
    console.error("Error creating company:", error);
    return {
      status: 500,
      message: "An error occurred while creating the company.",
    };
  }
};

export const getOnePager = async (oneLink) => {
  try {
    const company = await StartUpModel.findOne({ oneLink });
    if (!company) {
      return {
        status: 404,
        message: "StartUp not found.",
      };
    }
    return {
      status: 200,
      message: "StartUp details retrieved successfully.",
      data: company,
    };
  } catch (err) {
    console.error("Error getting StartUp details:", err);
    return {
      status: 500,
      message: "An error occurred while getting StartUp details.",
    };
  }
};

export const updateStartUpData = async (founderId, data) => {
  try {
    const startUp = await StartUpModel.findOne({ founderId });
    if (!startUp) {
      return {
        status: 404,
        message: "No startUp found",
      };
    }
    const updatedData = await StartUpModel.findOneAndUpdate(
      { founderId },
      data,
      { new: true }
    );
    return {
      status: 200,
      data: updatedData,
      message: `${startUp.company} updated succesfully`,
    };
  } catch (error) {
    console.error("Error updating StartUp details:", error);
    return {
      status: 500,
      message: "An error occurred while updating StartUp details.",
    };
  }
};

export const updateOnePager = async ({ _id, ...data }) => {
  try {
    const newOnePage = await StartUpModel.findByIdAndUpdate(_id, data, {
      new: true,
    });
    return {
      status: 200,
      message: "One Pager updated succesfully",
      data: newOnePage,
    };
  } catch (error) {
    console.error("Error updating One Pager details:", error);
    return {
      status: 500,
      message: "An error occurred while updating One Pager details.",
    };
  }
};

export const investNowService = async (args) => {
  try {
    const { fromUserName, fromUserEmail, fromUserMobile, toUserId } = args;
    const toUser = await UserModel.findById(toUserId);
    if (!toUser) {
      return {
        status: 404,
        message: "Recipient user not found.",
      };
    }
    
    const emailMessage = `
      Hello ${toUser.firstName},
      
      You have received an investment proposal from ${fromUserName}.
      
      Contact Details:
      Email: ${fromUserEmail}
      Mobile: ${fromUserMobile}
      
      Regards,
      CapitalHub
    `;
    const response = await sendMail(
      "Capital HUB",
      toUser.email,
      fromUserEmail,
      "Investment Proposal",
      emailMessage
    );

    if (response.status === 200) {
      const startup = await StartUpModel.findOne({ founderId: toUserId });
      if (startup) {
        startup.investorProposals.push({
          name: fromUserName,
          email: fromUserEmail,
          phone: fromUserMobile,
        });
        await startup.save();
      }
      return {
        status: 200,
        message: "Investment proposal email sent successfully.",
      };
    } else {
      return {
        status: 500,
        message: "An error occurred while sending the investment proposal email.",
      };
    }
  } catch (error) {
    console.error("Error sending investment proposal email:", error);
    return {
      status: 500,
      message: "An error occurred while sending the investment proposal email.",
    };
  }
};